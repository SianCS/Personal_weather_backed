import prisma from "../config/prisma.config.js";
// 🔽 1. Import ฟังก์ชัน createError ที่คุณสร้างขึ้น
import { createError } from "../utils/createError.js";

/**
 * ดึงรายการเมืองโปรดทั้งหมดของผู้ใช้
 * @param {number} userId - ID ของผู้ใช้
 * @returns {Promise<Array<object>>} รายการเมืองโปรด
 */
export async function getFavoritesByUserId(userId) {
  const favorites = await prisma.favoriteLocation.findMany({
    where: { userId },
    include: { city: true }, // รวมข้อมูลเมืองที่เกี่ยวข้องมาด้วย
  });

  // จัดรูปแบบข้อมูลก่อนส่งกลับ
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
 * เพิ่มเมืองใหม่เข้ารายการโปรด
 * @param {number} userId - ID ของผู้ใช้
 * @param {number} cityId - ID ของเมือง
 * @param {string | null} favoriteName - ชื่อเล่นที่ผู้ใช้ตั้ง (อาจเป็น null)
 * @returns {Promise<object>} ข้อมูล favorite ที่สร้างขึ้นใหม่
 */
export async function addFavorite(userId, cityId, favoriteName) {
  // 1. ตรวจสอบว่าเคย favorite ไปแล้วหรือยัง
  const existingFavorite = await prisma.favoriteLocation.findFirst({
    where: { userId, cityId },
  });

  if (existingFavorite) {
    // 🔽 2. เรียกใช้ createError เพื่อโยนข้อผิดพลาด
    createError(409, "City is already in favorites"); // 409 Conflict
  }

  // 3. สร้างรายการโปรดใหม่
  const newFavorite = await prisma.favoriteLocation.create({
    data: {
      userId,
      cityId,
      favoriteName: favoriteName?.trim() || null,
    },
    include: { city: true },
  });

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
  // 1. ตรวจสอบว่าเป็นเจ้าของรายการโปรดนี้จริงหรือไม่
  const favorite = await prisma.favoriteLocation.findUnique({
    where: { id: favoriteId },
  });

  if (!favorite || favorite.userId !== userId) {
    createError(404, "Favorite not found or unauthorized");
  }

  // 2. อัปเดตชื่อ
  return await prisma.favoriteLocation.update({
    where: { id: favoriteId },
    data: {
      favoriteName: newName?.trim() || null,
    },
  });
}

/**
 * ลบเมืองออกจากรายการโปรด
 * @param {number} userId - ID ของผู้ใช้
 * @param {number} favoriteId - ID ของรายการโปรด
 * @returns {Promise<void>}
 */
export async function deleteFavorite(userId, favoriteId) {
  // 1. ตรวจสอบว่าเป็นเจ้าของรายการโปรดนี้จริงหรือไม่
  const favorite = await prisma.favoriteLocation.findUnique({
    where: { id: favoriteId },
  });

  if (!favorite || favorite.userId !== userId) {
    createError(404, "Favorite not found or unauthorized");
  }

  // 2. ลบรายการโปรด
  await prisma.favoriteLocation.delete({
    where: { id: favoriteId },
  });
}
