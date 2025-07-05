import express from "express";
// 🔽 1. Import services และ middlewares ที่จำเป็น
import { getCurrentWeatherByCityName, getFiveDayForecastByCityId } from "../services/weather.service.js";
import { createError } from "../utils/createError.js"; // 🔽 Import createError

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
weatherRouter.get("/:cityId/forecast", async (req, res, next) => {
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

export default weatherRouter;
