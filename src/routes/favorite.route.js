import express from "express";
import axios from "axios"; // ต้องใช้ axios สำหรับเรียก OpenWeatherMap API
import { authMiddleware } from "../middlewares/auth.middleware.js";
import prisma from "../config/prisma.config.js";

const favoriteRoute = express.Router();

// 💡 เพิ่มการตรวจสอบเวอร์ชันของ Prisma Client ที่กำลังใช้งานอยู่
console.log(`Prisma Client Version in favoriteRoute.js: ${prisma.clientVersion}`);

// 🔧 ฟังก์ชันช่วย: ค้นหาเมืองในฐานข้อมูลแบบไม่แคร์ตัวพิมพ์เล็กใหญ่
// ปรับปรุงให้ใช้ Prisma query โดยตรงเพื่อประสิทธิภาพที่ดีขึ้น
async function findCityInDB(normalizedName) {
  try {
    const city = await prisma.city.findFirst({
      where: {
        OR: [
          { cityName: { equals: normalizedName } }, // ค้นหาจาก cityName (case-sensitive by default for MySQL)
          { locationName: { equals: normalizedName } }, // ค้นหาจาก locationName (case-sensitive by default for MySQL)
        ],
      },
    });
    return city;
  } catch (error) {
    console.error("❌ Error finding city in DB:", error);
    return null;
  }
}

// 🌍 ฟังก์ชันช่วย: ดึงข้อมูลเมืองจาก OpenWeatherMap API และจัดการการเพิ่ม/อัปเดตในฐานข้อมูล
async function fetchAndEnsureCityInDB(cityName) {
  try {
    const geoRes = await axios.get("https://api.openweathermap.org/geo/1.0/direct", {
      params: {
        q: cityName,
        limit: 1,
        appid: process.env.OWM_KEY,
      },
    });

    const geo = geoRes.data?.[0];
    if (!geo) {
      console.log(`🔍 City '${cityName}' not found in OpenWeatherMap API.`);
      return null;
    }

    // **จัดการการสร้าง City เพื่อป้องกันข้อมูลซ้ำและ Race Condition**
    // ขั้นแรก: พยายามหาเมืองด้วย latitude และ longitude ที่ได้จาก API อีกครั้ง
    let city = await prisma.city.findFirst({
      where: {
        latitude: geo.lat,
        longitude: geo.lon,
      },
    });

    // ถ้ายังไม่เจอเมือง (หมายถึงยังไม่มีใครสร้างเมืองนี้ด้วย lat/lon นี้)
    if (!city) {
      const maxRetries = 3;
      for (let i = 0; i < maxRetries; i++) {
        try {
          city = await prisma.city.create({
            data: {
              cityName: geo.name,
              locationName: geo.local_names?.th || geo.name,
              latitude: geo.lat,
              longitude: geo.lon,
            },
          });
          console.log(`✅ City '${city.cityName}' (ID: ${city.id}) created into DB from API.`);
          break; // สร้างสำเร็จ ออกจากลูป
        } catch (createError) {
          if (createError.code === 'P2002') {
            console.warn(`⚠️ Race condition detected for city '${cityName}'. Attempting to find existing city.`);
            city = await prisma.city.findFirst({
              where: {
                latitude: geo.lat,
                longitude: geo.lon,
              },
            });
            if (city) {
              console.log(`✅ City '${city.cityName}' (ID: ${city.id}) found after race condition.`);
              break; // พบเมืองที่ถูกสร้างไปแล้ว ใช้อันนั้นแทน
            } else {
              console.error(`❌ Still unable to find city after P2002 for '${cityName}'. Retrying in 50ms.`);
              await new Promise(resolve => setTimeout(resolve, 50));
            }
          } else {
            throw createError; // หากเป็นข้อผิดพลาดอื่นที่ไม่ใช่ P2002 ให้โยนข้อผิดพลาดนั้นออกไป
          }
        }
      }
      if (!city) {
        throw new Error("Failed to create or find city after multiple retries due to persistent issues.");
      }
    } else {
      console.log(`✅ City '${city.cityName}' (ID: ${city.id}) found in DB after API fetch attempt.`);
    }
    return city;
  } catch (error) {
    console.error("❌ Error fetching city from API or ensuring in DB:", error);
    return null;
  }
}


// ✅ POST /favorites - เพิ่มรายการโปรด
favoriteRoute.post("/", authMiddleware, async (req, res) => {
  const { cityName, favoriteName } = req.body;

  if (!cityName?.trim()) {
    return res.status(400).json({ error: "City name is required" });
  }

  // ⭐ ปรับปรุงการตรวจสอบ favoriteName ให้รองรับค่าว่าง (nullable)
  // หาก favoriteName ไม่ได้ระบุมา หรือเป็น string ว่าง/whitespace จะเก็บเป็น null
  const finalFavoriteName = favoriteName?.trim() || null;


  const normalizedCityName = cityName.trim().toLowerCase();

  try {
    // 1. ค้นหาเมืองใน DB หรือดึงจาก API และบันทึกลง DB อย่างแข็งแกร่ง
    let city = await findCityInDB(normalizedCityName);
    if (!city) {
        city = await fetchAndEnsureCityInDB(cityName);
    }

    if (!city) {
      return res.status(404).json({ error: "City not found from API" });
    }

    // ⭐ เพิ่มการตรวจสอบ userId ก่อนดำเนินการกับ Prisma
    if (!req.user || !req.user.userId) {
        console.error("❌ Auth Error: userId is missing from request.user. This might indicate an issue with authMiddleware or an invalid token.");
        return res.status(401).json({ error: "Unauthorized: User ID not found." });
    }
    console.log(`Attempting to add favorite for userId: ${req.user.userId}`); // Log userId for debugging


    // 2. ตรวจว่า favorite เมืองนี้ไปแล้วหรือยัง
    const existingFavorite = await prisma.favoriteLocation.findFirst({
      where: {
        userId: req.user.userId,
        cityId: city.id,
      },
    });

    if (existingFavorite) {
      return res.status(400).json({ error: "City already in favorites" });
    }

    // 3. เพิ่ม favorite พร้อมชื่อ
    const favorite = await prisma.favoriteLocation.create({
      data: {
        userId: req.user.userId,
        cityId: city.id,
        favoriteName: finalFavoriteName, // ใช้ค่าที่ตรวจสอบแล้ว
      },
    });

    return res.status(201).json({
      message: "Added to favorites",
      favorite: {
        id: favorite.id,
        cityId: city.id,
        cityName: city.cityName,
        locationName: city.locationName,
        favoriteName: favorite.favoriteName, // ใช้ favorite.favoriteName ที่ถูกบันทึก
      },
    });
  } catch (err) {
    console.error("❌ Error adding favorite:", err);
    // เพิ่มการตรวจสอบประเภทของข้อผิดพลาด เพื่อให้ข้อมูลที่เฉพาะเจาะจงมากขึ้น
    if (err.code === 'P2002') {
      console.error("💡 Likely a unique constraint violation (e.g., userId, cityId already exists).");
    } else if (err.code === 'P2003') { // Foreign key constraint violation
      console.error("💡 P2003: Foreign key constraint violation. This means the userId provided does not exist in the User table.");
      console.error("   Please ensure the user token is valid and corresponds to an existing user in the database.");
    } else if (err.name === 'PrismaClientValidationError') {
  console.error("💡 PrismaClientValidationError: This usually means your Prisma Client is out of sync with your schema.prisma.");
  console.error("   Please ensure you have run 'npx prisma generate' and fully restarted your server.");
    }
    res.status(500).json({ error: "Server error occurred while adding favorite" });
  }
});

// ✅ GET /favorites - ดึงรายการโปรดทั้งหมดของผู้ใช้
favoriteRoute.get("/", authMiddleware, async (req, res) => {
  // ⭐ เพิ่มการตรวจสอบ userId ก่อนดำเนินการกับ Prisma
  if (!req.user || !req.user.userId) {
    console.error("❌ Auth Error: userId is missing from request.user. This might indicate an issue with authMiddleware or an invalid token.");
    return res.status(401).json({ error: "Unauthorized: User ID not found." });
  }
  console.log(`Attempting to retrieve favorites for userId: ${req.user.userId}`);

  try {
    const favorites = await prisma.favoriteLocation.findMany({
      where: {
        userId: req.user.userId,
      },
      include: {
        city: true, // รวมข้อมูลเมืองที่เกี่ยวข้อง
      },
    });

    if (favorites.length === 0) {
      return res.status(200).json({ message: "No favorites found for this user.", favorites: [] });
    }

    // จัดรูปแบบข้อมูลที่ส่งกลับ
    const formattedFavorites = favorites.map(fav => ({
      id: fav.id,
      favoriteName: fav.favoriteName,
      cityId: fav.cityId,
      cityName: fav.city.cityName,
      locationName: fav.city.locationName,
      latitude: fav.city.latitude,
      longitude: fav.city.longitude,
    }));

    return res.status(200).json({
      message: "Favorites retrieved successfully",
      favorites: formattedFavorites,
    });
  } catch (err) {
    console.error("❌ Error retrieving favorites:", err);
    res.status(500).json({ error: "Server error occurred while retrieving favorites" });
  }
});


// ✅ PATCH /favorites/:id - แก้ไขชื่อ favorite
favoriteRoute.patch("/:id", authMiddleware, async (req, res) => {
  const favoriteId = parseInt(req.params.id);
  const { favoriteName } = req.body;

  if (isNaN(favoriteId)) {
    return res.status(400).json({ error: "Invalid favorite ID" });
  }

  // ⭐ ปรับปรุงการตรวจสอบ favoriteName สำหรับ PATCH ให้รองรับค่าว่าง (nullable)
  // หาก favoriteName เป็น string ว่าง/whitespace จะเก็บเป็น null
  const finalFavoriteName = favoriteName?.trim() || null;


  try {
    // ตรวจว่า favorite นี้เป็นของผู้ใช้
    const favorite = await prisma.favoriteLocation.findUnique({
      where: { id: favoriteId },
    });

    if (!favorite || favorite.userId !== req.user.userId) {
      return res
        .status(404)
        .json({ error: "Favorite not found or unauthorized" });
    }

    // อัปเดตชื่อ
    const updated = await prisma.favoriteLocation.update({
      where: { id: favoriteId },
      data: {
        favoriteName: finalFavoriteName, // ใช้ค่าที่ตรวจสอบแล้ว
      },
    });

    return res.status(200).json({
      message: "Favorite name updated",
      favorite: {
        id: updated.id,
        cityId: updated.cityId,
        favoriteName: updated.favoriteName, // ใช้ updated.favoriteName ที่ถูกบันทึก
      },
    });
  } catch (err) {
    console.error("❌ Error updating favorite:", err);
    res.status(500).json({ error: "Server error occurred while updating favorite" });
  }
});


// ✅ DELETE /favorites/:id - ลบรายการโปรด
favoriteRoute.delete("/:id", authMiddleware, async (req, res) => {
  const favoriteId = parseInt(req.params.id);

  if (isNaN(favoriteId)) {
    return res.status(400).json({ error: "Invalid favorite ID" });
  }

  // ⭐ เพิ่มการตรวจสอบ userId ก่อนดำเนินการกับ Prisma
  if (!req.user || !req.user.userId) {
    console.error("❌ Auth Error: userId is missing from request.user. This might indicate an issue with authMiddleware or an invalid token.");
    return res.status(401).json({ error: "Unauthorized: User ID not found." });
  }
  console.log(`Attempting to delete favorite ID: ${favoriteId} for userId: ${req.user.userId}`);

  try {
    // 1. ตรวจสอบว่า favorite นี้เป็นของผู้ใช้ที่ล็อกอินอยู่หรือไม่
    const favorite = await prisma.favoriteLocation.findUnique({
      where: { id: favoriteId },
    });

    if (!favorite || favorite.userId !== req.user.userId) {
      return res
        .status(404)
        .json({ error: "Favorite not found or unauthorized to delete" });
    }

    // 2. ลบรายการโปรด
    await prisma.favoriteLocation.delete({
      where: { id: favoriteId },
    });

    return res.status(200).json({ message: "Favorite deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting favorite:", err);
    // เพิ่มการตรวจสอบประเภทของข้อผิดพลาด
    if (err.code === 'P2025') { // P2025 is for record not found (though our check above should catch this)
      console.error("💡 P2025: Record to delete does not exist.");
    }
    res.status(500).json({ error: "Server error occurred while deleting favorite" });
  }
});


export default favoriteRoute;
