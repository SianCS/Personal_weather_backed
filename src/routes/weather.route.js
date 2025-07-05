import express from "express";
import axios from "axios";
import prisma from "../config/prisma.config.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const weatherRouter = express.Router();



weatherRouter.get("/", async (req, res) => {
  const cityName = req.query.city;
  if (!cityName) {
    return res.status(400).json({ error: "Please provide city name" });
  }

  const searchName = cityName.trim().toLowerCase();

  try {
    let city = null;

    // 1. ค้นหา City ใน DB โดยตรงด้วย Prisma
    // Uses findFirst to search case-insensitively (if database collation supports it, otherwise case-sensitive)
    city = await prisma.city.findFirst({
      where: {
        OR: [
          { cityName: { equals: searchName } },
          { locationName: { equals: searchName } },
        ],
      },
    });

    // 2. ถ้าไม่เจอ → ดึงจาก OpenWeatherMap API และจัดการการเพิ่ม/อัปเดตใน DB
    if (!city) {
      console.log(
        `🔍 City '${cityName}' not found in DB. Attempting to fetch from OpenWeatherMap API.`
      );
      const geoRes = await axios.get(
        "https://api.openweathermap.org/geo/1.0/direct",
        {
          params: {
            q: cityName,
            limit: 1,
            appid: process.env.OWM_KEY,
          },
        }
      );

      const geo = geoRes.data?.[0];
      if (!geo) {
        console.log(`🔍 City '${cityName}' not found in OpenWeatherMap API.`);
        return res
          .status(404)
          .json({ error: "City not found from external API" });
      }

      // Robust city creation to handle race conditions
      city = await prisma.city.findFirst({
        where: {
          latitude: geo.lat,
          longitude: geo.lon,
        },
      });

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
            console.log(
              `✅ City '${city.cityName}' (ID: ${city.id}) created into DB.`
            );
            break;
          } catch (createError) {
            if (createError.code === "P2002") {
              console.warn(
                `⚠️ Race condition detected for city '${cityName}'. Attempting to find existing city.`
              );
              city = await prisma.city.findFirst({
                where: {
                  latitude: geo.lat,
                  longitude: geo.lon,
                },
              });
              if (city) {
                console.log(
                  `✅ City '${city.cityName}' (ID: ${city.id}) found after race condition.`
                );
                break;
              } else {
                console.error(
                  `❌ Still unable to find city after P2002 for '${cityName}'. Retrying in 50ms.`
                );
                await new Promise((resolve) => setTimeout(resolve, 50));
              }
            } else {
              throw createError;
            }
          }
        }
        if (!city) {
          throw new Error(
            "Failed to create or find city after multiple retries due to persistent issues."
          );
        }
      } else {
        console.log(
          `✅ City '${city.cityName}' (ID: ${city.id}) found in DB after API fetch.`
        );
      }
    } else {
      console.log(
        `✅ City '${city.cityName}' (ID: ${city.id}) found in DB initially.`
      );
    }

    // 3. ตรวจสอบข้อมูลสภาพอากาศใน DB (Caching Logic)
    const CACHE_DURATION_MINUTES = 10;
    const tenMinutesAgo = new Date(
      Date.now() - CACHE_DURATION_MINUTES * 60 * 1000
    );

    let weatherData = await prisma.weatherData.findUnique({
      where: { cityId: city.id },
    });

    let updatedWeather;

    if (weatherData && weatherData.timestamp > tenMinutesAgo) {
      // Data is fresh, use cached data
      console.log(
        `✅ Using cached weather data for '${city.cityName}' (ID: ${city.id}). Data is fresh.`
      );
      updatedWeather = weatherData;
    } else {
      // Data is old or missing, fetch from API and update DB
      console.log(
        `🔄 Fetching new weather data for '${city.cityName}' (ID: ${city.id}). Data is old or missing.`
      );
      const weatherRes = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            lat: city.latitude,
            lon: city.longitude,
            units: "metric",
            lang: "th",
            appid: process.env.OWM_KEY,
          },
        }
      );

      const w = weatherRes.data;

      updatedWeather = await prisma.weatherData.upsert({
        where: { cityId: city.id },
        update: {
          timestamp: new Date(w.dt * 1000),
          temperature: w.main.temp,
          humidity: w.main.humidity,
          windSpeed: w.wind.speed,
          description: w.weather[0].description,
        },
        create: {
          cityId: city.id,
          timestamp: new Date(w.dt * 1000),
          temperature: w.main.temp,
          humidity: w.main.humidity,
          windSpeed: w.wind.speed,
          description: w.weather[0].description,
        },
      });
      console.log(
        `✅ Weather data for '${city.cityName}' (ID: ${city.id}) upserted.`
      );
    }

    // 4. ส่งผลลัพธ์กลับ
    return res.json({
      city: city.locationName,
      temperature: updatedWeather.temperature,
      humidity: updatedWeather.humidity,
      windSpeed: updatedWeather.windSpeed,
      description: updatedWeather.description,
      time: updatedWeather.timestamp,
      source:
        updatedWeather === weatherData ? "from_cache" : "from_api_or_updated",
    });
  } catch (err) {
    console.error("❌ Error in weather route:", err);
    res
      .status(500)
      .json({ error: "Server error occurred while fetching weather" });
  }
});

weatherRouter.get("/:cityId/forecast",authMiddleware, async (req, res) => {
  const cityId = parseInt(req.params.cityId);

  // ตรวจสอบว่า cityId เป็นตัวเลขที่ถูกต้อง
  if (isNaN(cityId)) {
    return res.status(400).json({ error: "Invalid city ID" });
  }

  try {
    // 1. ค้นหาพิกัด (lat/lon) ของเมืองจากฐานข้อมูล
    const city = await prisma.city.findUnique({
      where: { id: cityId },
    });

    if (!city) {
      return res.status(404).json({ error: "City not found in database" });
    }

    // 2. เรียก Forecast API จาก OpenWeatherMap
    const forecastRes = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          lat: city.latitude,
          lon: city.longitude,
          units: "metric", // เพื่อให้ได้อุณหภูมิเป็น Celsius
          lang: "th",      // เพื่อให้คำอธิบายเป็นภาษาไทย
          appid: process.env.OWM_KEY, // API Key จาก .env
        },
      }
    );

    const data = forecastRes.data;

    // 3. จัดรูปแบบข้อมูลที่ได้จาก API ให้อยู่ในรูปแบบที่ใช้งานง่าย
    const forecasts = data.list.map((item) => ({
      time: item.dt_txt, // เวลาพยากรณ์ e.g., "2025-07-06 18:00:00"
      temperature: item.main.temp,
      feels_like: item.main.feels_like,
      humidity: item.main.humidity,
      description: item.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`, // URL ไอคอน
    }));

    // 4. ส่งข้อมูลกลับให้ Client
    res.json({
      city: {
        id: city.id,
        name: city.locationName,
      },
      forecasts,
    });
    
  } catch (err) {
    // จัดการ Error ที่อาจเกิดขึ้น
    console.error("❌ Error fetching 5-day forecast:", err.response ? err.response.data : err.message);
    res.status(500).json({ error: "Server error while fetching forecast" });
  }
});

export default weatherRouter;
