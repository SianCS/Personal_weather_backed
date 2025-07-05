import express from "express";
import axios from "axios";
import prisma from "../config/prisma.config.js";

const cityRoute = express.Router();

// 💡 เพิ่มการตรวจสอบเวอร์ชันของ Prisma Client ที่กำลังใช้งานอยู่
console.log(`Prisma Client Version in city.route.js: ${prisma.clientVersion}`);

cityRoute.get("/search", async (req, res) => {
  const query = req.query.q?.trim();

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  const normalizedQuery = query.toLowerCase(); // ใช้สำหรับเปรียบเทียบภายในโค้ด

  try {
    let cities = [];

    // 1. ค้นหาใน DB ด้วยการค้นหาแบบ Case-Sensitive (เนื่องจาก mode: 'insensitive' ไม่รองรับใน MySQL)
    // หากต้องการ Case-Insensitive ต้องตั้งค่า Collation ใน DB หรือใช้ Raw SQL
    const dbCities = await prisma.city.findMany({
      where: {
        OR: [
          { cityName: { contains: normalizedQuery } }, // ค้นหาแบบ substring
          { locationName: { contains: normalizedQuery } }, // ค้นหาแบบ substring
        ],
      },
      take: 10,
    });

    if (dbCities.length > 0) {
      cities = dbCities;
      console.log(
        `✅ Found ${cities.length} cities in DB for query: '${query}'`
      );
    }

    // 2. ถ้าไม่เจอใน DB หรือเจอไม่ครบตามที่ต้องการ (เช่น ต้องการอย่างน้อย 10 แต่เจอไม่ถึง)
    // หรือถ้าต้องการอัปเดตข้อมูลจาก API เสมอ (ปรับ logic ได้)
    if (cities.length === 0) {
      // หรือปรับเงื่อนไข เช่น if (cities.length < 10)
      console.log(
        `🔍 No cities found in DB for '${query}'. Fetching from OpenWeatherMap API.`
      );
      const apiRes = await axios.get(
        "https://api.openweathermap.org/geo/1.0/direct",
        {
          params: {
            q: query,
            limit: 1, // ดึงมาแค่ 1 ผลลัพธ์ตามโค้ดเดิม
            appid: process.env.OWM_KEY,
          },
        }
      );

      const geo = apiRes.data?.[0];
      if (!geo) {
        console.log(`🔍 City '${query}' not found from OpenWeatherMap API.`);
        return res.status(404).json({ error: "City not found from API" });
      }

      // 3. จัดการการสร้าง/ค้นหา City ใน DB เพื่อป้องกันข้อมูลซ้ำและ Race Condition
      let cityFromGeo = await prisma.city.findFirst({
        where: {
          latitude: geo.lat,
          longitude: geo.lon,
        },
      });

      if (!cityFromGeo) {
        const maxRetries = 3;
        for (let i = 0; i < maxRetries; i++) {
          try {
            cityFromGeo = await prisma.city.create({
              data: {
                cityName: geo.name,
                locationName: geo.local_names?.th || geo.name,
                latitude: geo.lat,
                longitude: geo.lon,
              },
            });
            console.log(
              `✅ City '${cityFromGeo.cityName}' (ID: ${cityFromGeo.id}) created into DB from API.`
            );
            break; // สร้างสำเร็จ ออกจากลูป
          } catch (createError) {
            if (createError.code === "P2002") {
              // หากเกิด P2002 (Unique constraint failed) หมายความว่ามีอีก request สร้างเมืองนี้ไปแล้ว
              console.warn(
                `⚠️ Race condition detected for city '${query}'. Attempting to find existing city.`
              );
              cityFromGeo = await prisma.city.findFirst({
                where: {
                  latitude: geo.lat,
                  longitude: geo.lon,
                },
              });
              if (cityFromGeo) {
                console.log(
                  `✅ City '${cityFromGeo.cityName}' (ID: ${cityFromGeo.id}) found after race condition.`
                );
                break; // พบเมืองที่ถูกสร้างไปแล้ว ใช้อันนั้นแทน
              } else {
                console.error(
                  `❌ Still unable to find city after P2002 for '${query}'. Retrying in 50ms.`
                );
                await new Promise((resolve) => setTimeout(resolve, 50));
              }
            } else {
              throw createError; // หากเป็นข้อผิดพลาดอื่นที่ไม่ใช่ P2002 ให้โยนข้อผิดพลาดนั้นออกไป
            }
          }
        }
        if (!cityFromGeo) {
          throw new Error(
            "Failed to create or find city after multiple retries due to persistent issues."
          );
        }
      } else {
        console.log(
          `✅ City '${cityFromGeo.cityName}' (ID: ${cityFromGeo.id}) found in DB after API fetch attempt.`
        );
      }
      cities = [cityFromGeo]; // เพิ่มเมืองที่เจอ/สร้างใหม่ลงใน array
    }

    // ส่งผลลัพธ์กลับ
    return res.json({ cities });
  } catch (err) {
    console.error("❌ Error searching city:", err);
    // เพิ่มการตรวจสอบประเภทของข้อผิดพลาด เพื่อให้ข้อมูลที่เฉพาะเจาะจงมากขึ้น
    if (err.name === "PrismaClientValidationError") {
      console.error(
        "💡 PrismaClientValidationError: This usually means your Prisma Client is out of sync with your schema.prisma."
      );
      console.error(
        "   Please ensure you have run 'npx prisma generate' and fully restarted your server."
      );
    }
    res
      .status(500)
      .json({ error: "Server error occurred while searching city" });
  }
});

export default cityRoute;
