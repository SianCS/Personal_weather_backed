import express from "express";
// 🔽 1. Import services และ middlewares ที่จำเป็น
import { getCurrentWeatherByCityName, getFiveDayForecastByCityId, getWeatherByCoords } from "../services/weather.service.js";
import { createError } from "../utils/createError.js"; // 🔽 Import createError
import { authMiddleware } from "../middlewares/auth.middleware.js";

const weatherRouter = express.Router();

/**
 * @route   GET /api/weather
 * @desc    ดึงข้อมูลอากาศล่าสุดของเมือง (มีระบบ Cache)
 * @access  Public
 */
// 🔽 2. เพิ่ม next เป็นพารามิเตอร์
weatherRouter.get("/", async (req, res, next) => {
  const { city: cityName } = req.query;

  if (!cityName?.trim()) {
    // 🔽 ใช้ createError และส่งต่อด้วย next
    return next(createError(400, "City name is required"));
  }

  try {
    // เรียกใช้ service เพื่อดึงข้อมูลอากาศล่าสุด
    const weatherData = await getCurrentWeatherByCityName(cityName);
    return res.json(weatherData);
  } catch (err) {
    // 🔽 3. ส่ง Error ทั้งหมดต่อไปให้ error middleware จัดการ
    next(err);
  }
});

/**
 * @route   GET /api/weather/:cityId/forecast
 * @desc    ดึงข้อมูลพยากรณ์อากาศล่วงหน้า 5 วัน
 * @access  Public
 */
weatherRouter.get("/:cityId/forecast",authMiddleware , async (req, res, next) => {
  const cityId = parseInt(req.params.cityId, 10);

  if (isNaN(cityId)) {
    // 🔽 ใช้ createError และส่งต่อด้วย next
    return next(createError(400, "Invalid city ID"));
  }

  try {
    // เรียกใช้ service เพื่อดึงข้อมูลพยากรณ์
    const forecastData = await getFiveDayForecastByCityId(cityId);
    return res.json(forecastData);
  } catch (err) {
    // 🔽 ส่ง Error ทั้งหมดต่อไปให้ error middleware จัดการ
    next(err);
  }
});


 //  หาสภาพอากาศ จาก lat ,lon  
weatherRouter.get("/by-coords", async (req, res, next) => {
  const { lat, lon } = req.query;

  // ตรวจสอบว่ามี lat และ lon ส่งมาหรือไม่
  if (!lat || !lon) {
    return next(createError(400, "Latitude (lat) and Longitude (lon) are required."));
  }

  const latitude = parseFloat(lat);
  const longitude = parseFloat(lon);

  // ตรวจสอบว่า lat และ lon เป็นตัวเลขที่ถูกต้อง
  if (isNaN(latitude) || isNaN(longitude)) {
    return next(createError(400, "Invalid latitude or longitude format."));
  }

  try {
    //  2. เรียกใช้ service เพื่อดึงข้อมูลอากาศจากพิกัด
    const weatherData = await getWeatherByCoords(latitude, longitude);
    return res.json(weatherData);
  } catch (err) {
    // 🔽 3. ส่ง Error ต่อไปให้ middleware จัดการ
    next(err);
  }
});

export default weatherRouter;
