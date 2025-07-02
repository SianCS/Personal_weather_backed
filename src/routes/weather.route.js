import express from "express";
import axios from "axios";
import prisma from "../config/prisma.config.js";

const weatherRouter = express.Router();

weatherRouter.get("/", async (req, res) => {
  const cityName = req.query.city;
  if (!cityName) return res.status(400).json({ error: "Please put your City" });

  try {
    // 1. หา City จากฐานข้อมูล
    let city = await prisma.city.findFirst({
      where: {
        OR: [{ cityName: cityName }, { locationName: cityName }],
      },
    });

    // 2. ถ้ายังไม่มี → ไปดึงจาก OpenWeather
   if (!city) {
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

      const geo = geoRes.data[0];
      if (!geo) {
        return res.status(404).json({ error: "Not Found Info from API" });
      }

      city = await prisma.city.create({
        data: {
          cityName: geo.name,
          locationName: geo.local_names?.th || geo.name,
          latitude: geo.lat,
          longitude: geo.lon,
        },
      });
    }

    // 3. ดึง current weather จาก OpenWeather
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

    // 4. บันทึก WeatherData ลงฐานข้อมูล
    const weather = await prisma.weatherData.create({
      data: {
        cityId: city.id,
        timestamp: new Date(w.dt * 1000),
        temperature: w.main.temp,
        humidity: w.main.humidity,
        windSpeed: w.wind.speed,
        description: w.weather[0].description,
      },
    });

    // 5. ส่งข้อมูลกลับ
    res.json({
      city: city.locationName,
      temperature: weather.temperature,
      humidity: weather.humidity,
      windSpeed: weather.windSpeed,
      description: weather.description,
      time: weather.timestamp,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something Wrong with Server" });
  }
});

export default weatherRouter;
