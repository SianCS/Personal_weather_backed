import express from "express";
// 🔽 1. Import service ที่จะจัดการ Logic ทั้งหมด
import { searchAndEnsureCity } from "../services/city.service.js";

const cityRoute = express.Router();

/**
 * @route   GET /api/cities/search
 * @desc    ค้นหาเมืองจากฐานข้อมูล ถ้าไม่เจอจะดึงจาก API มาสร้างใหม่
 * @access  Public
 */
// 🔽 2. เพิ่ม next เป็นพารามิเตอร์
cityRoute.get("/search", async (req, res, next) => { 
  const query = req.query.q?.trim();

  if (!query) {
    return res.json({ cities: [] });
  }

  try {
    // เรียกใช้ service เพื่อค้นหาและสร้างเมือง
    const cities = await searchAndEnsureCity(query);
    return res.json({ cities });
  } catch (err) {
    // 🔽 3. ส่ง Error ต่อไปให้ error middleware จัดการ
    next(err);
  }
});

export default cityRoute;
