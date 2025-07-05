import axios from "axios";
import prisma from "../config/prisma.config.js";
// 🔽 1. Import ฟังก์ชัน createError ที่คุณสร้างขึ้น
import { createError } from "../utils/createError.js";

/**
 * ค้นหาเมืองในฐานข้อมูล ถ้าไม่เจอจะดึงจาก API มาสร้างใหม่
 * @param {string} query - คำค้นหาจากผู้ใช้
 * @returns {Promise<Array<object>>} รายการเมืองที่ค้นเจอ
 * @throws {Error} หากเกิดข้อผิดพลาดในการค้นหาหรือสร้างเมือง
 */
export async function searchAndEnsureCity(query) {
  const normalizedQuery = query.toLowerCase();

  try {
    // 1. ค้นหาใน DB ก่อน
    const dbCities = await prisma.city.findMany({
      where: {
        OR: [
          { cityName: { contains: normalizedQuery } },
          { locationName: { contains: normalizedQuery } },
        ],
      },
      take: 10,
    });

    // ถ้าเจอใน DB ให้ส่งผลลัพธ์กลับไปเลย
    if (dbCities.length > 0) {
      console.log(`✅ Found ${dbCities.length} cities in DB for query: '${query}'`);
      return dbCities;
    }

    // 2. ถ้าไม่เจอใน DB ให้ดึงจาก OpenWeatherMap API
    console.log(`🔍 No cities found in DB for '${query}'. Fetching from API.`);
    const apiRes = await axios.get("https://api.openweathermap.org/geo/1.0/direct", {
      params: { q: query, limit: 1, appid: process.env.OWM_KEY },
    });

    const geo = apiRes.data?.[0];
    if (!geo) {
      // 🔽 2. ใช้ createError เพื่อโยนข้อผิดพลาดที่มี status code
      createError(404, "City not found from API");
    }

    // 3. จัดการการสร้าง/ค้นหา City ใน DB เพื่อป้องกันข้อมูลซ้ำและ Race Condition
    let cityFromGeo = await prisma.city.findFirst({
      where: { latitude: geo.lat, longitude: geo.lon },
    });

    if (cityFromGeo) {
      console.log(`✅ City '${cityFromGeo.cityName}' found by coordinates.`);
      return [cityFromGeo];
    }

    // ถ้ายังไม่เจอ ให้สร้างใหม่พร้อมจัดการ Race Condition
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
        console.log(`✅ City '${cityFromGeo.cityName}' created.`);
        return [cityFromGeo]; // สร้างสำเร็จ ส่งกลับเป็น array
      } catch (createError) {
        if (createError.code === "P2002") {
          console.warn(`⚠️ Race condition for '${query}'. Retrying...`);
          cityFromGeo = await prisma.city.findFirst({
            where: { latitude: geo.lat, longitude: geo.lon },
          });
          if (cityFromGeo) return [cityFromGeo];
          await new Promise((resolve) => setTimeout(resolve, 50));
        } else {
          // โยน Error อื่นๆ ออกไปให้ catch ด้านนอกจัดการ
          throw createError;
        }
      }
    }

    // 🔽 3. ใช้ createError เมื่อไม่สามารถสร้างเมืองได้
    createError(500, "Failed to create or find city after multiple retries.");

  } catch (err) {
    // 🔽 4. ส่งต่อ Error ที่เกิดขึ้นทั้งหมด (ไม่ว่าจะเป็นจาก Prisma หรือที่เราสร้างขึ้น)
    throw err; 
  }
}
