import prisma from "../config/prisma.config.js";
import { createError } from "../utils/createError.js";
// 🔽 ไม่จำเป็นต้อง import getOrCreateCity ในไฟล์นี้แล้ว
// import { getOrCreateCity } from "./weather.service.js";

/**
 * ดึงรายการเมืองโปรดทั้งหมดของผู้ใช้
 * @param {number} userId - ID ของผู้ใช้
 * @returns {Promise<Array<object>>} รายการเมืองโปรด
 */
export async function getFavoritesByUserId(userId) {
  const favorites = await prisma.favoriteLocation.findMany({
    where: { userId },
    include: { city: true },
  });

  return favorites.map(fav => ({
    id: fav.id,
    favoriteName: fav.favoriteName,
    cityId: fav.cityId,
    cityName: fav.city.cityName,
    locationName: fav.city.locationName,
    latitude: fav.city.latitude,
    longitude: fav.city.longitude,
  }));
}

/**
 * ✅ แก้ไข: เปลี่ยนชื่อฟังก์ชันและพารามิเตอร์ให้รับ cityId โดยตรง
 * @param {number} userId - ID ของผู้ใช้
 * @param {number} cityId - ID ของเมืองที่ต้องการเพิ่ม
 * @param {string | null} favoriteName - ชื่อเล่นที่ผู้ใช้ตั้ง
 * @returns {Promise<object>} ข้อมูล favorite ที่สร้างขึ้นใหม่
 */
export async function addFavorite(userId, cityInfo, favoriteName) {
  let city;

  // 2. ตรวจสอบว่าได้รับ cityId หรือ cityName มา
  if (cityInfo.cityId) {
    // ถ้ามี cityId ให้ใช้หาเมืองโดยตรง
    city = await prisma.city.findUnique({ where: { id: cityInfo.cityId } });
    if (!city) {
      createError(404, "City with the provided ID not found.");
    }
  } else if (cityInfo.cityName) {
    // ถ้ามี cityName ให้ใช้ getOrCreateCity เพื่อหาหรือสร้างเมือง
    city = await getOrCreateCity(cityInfo.cityName);
  } else {
    createError(400, "Either cityId or cityName is required.");
  }

  if (!city) {
    createError(500, "Could not find or create the specified city.");
  }

  // 3. ตรวจสอบว่าเคย favorite ไปแล้วหรือยัง
  const existingFavorite = await prisma.favoriteLocation.findFirst({
    where: { userId, cityId: city.id },
  });

  if (existingFavorite) {
    createError(409, "City is already in favorites");
  }

  // 4. สร้างรายการโปรดใหม่
  const newFavorite = await prisma.favoriteLocation.create({
    data: {
      userId,
      cityId: city.id,
      favoriteName: favoriteName?.trim() || null,
    },
    include: { city: true },
  });

  // 5. จัดรูปแบบข้อมูลก่อนส่งกลับ
  return {
    id: newFavorite.id,
    cityId: newFavorite.cityId,
    cityName: newFavorite.city.cityName,
    locationName: newFavorite.city.locationName,
    favoriteName: newFavorite.favoriteName,
  };
}

/**
 * แก้ไขชื่อเล่นของเมืองโปรด
 * @param {number} userId - ID ของผู้ใช้
 * @param {number} favoriteId - ID ของรายการโปรด
 * @param {string | null} newName - ชื่อเล่นใหม่
 * @returns {Promise<object>} ข้อมูล favorite ที่อัปเดตแล้ว
 */
export async function updateFavoriteName(userId, favoriteId, newName) {
  const favorite = await prisma.favoriteLocation.findUnique({
    where: { id: favoriteId },
  });

  if (!favorite || favorite.userId !== userId) {
    createError(404, "Favorite not found or unauthorized");
  }

  return await prisma.favoriteLocation.update({
    where: { id: favoriteId },
    data: { favoriteName: newName?.trim() || null },
  });
}

/**
 * ลบเมืองออกจากรายการโปรด
 * @param {number} userId - ID ของผู้ใช้
 * @param {number} favoriteId - ID ของรายการโปรด
 */
export async function deleteFavorite(userId, favoriteId) {
  const favorite = await prisma.favoriteLocation.findUnique({
    where: { id: favoriteId },
  });

  if (!favorite || favorite.userId !== userId) {
    createError(404, "Favorite not found or unauthorized");
  }

  await prisma.favoriteLocation.delete({
    where: { id: favoriteId },
  });
}
