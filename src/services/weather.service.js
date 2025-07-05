import axios from "axios";
import prisma from "../config/prisma.config.js";
// 🔽 1. Import ฟังก์ชัน createError ที่คุณสร้างขึ้น
import { createError } from "../utils/createError.js";

const CACHE_DURATION_MINUTES = 15;

/**
 * 🔽 ฟังก์ชันใหม่: ค้นหาเมืองจากฐานข้อมูลเท่านั้น
 * @param {string} cityName - ชื่อเมืองที่ต้องการค้นหา
 * @returns {Promise<object|null>} ข้อมูลเมือง หรือ null ถ้าไม่พบ
 */
export async function findCityByNameInDB(cityName) {
  const searchName = cityName.trim().toLowerCase();
  const cities = await prisma.city.findMany();
  const city = cities.find(
    (c) =>
      c.cityName.toLowerCase() === searchName ||
      c.locationName.toLowerCase() === searchName
  );
  return city;
}

/**
 * ค้นหาเมืองในฐานข้อมูล หรือสร้างใหม่ถ้าไม่พบ
 * @param {string} cityName - ชื่อเมืองที่ต้องการค้นหา
 * @returns {Promise<object>} ข้อมูลเมืองจากฐานข้อมูล
 * @throws {Error} หากไม่พบเมืองจาก API หรือเกิดข้อผิดพลาด
 */
export async function getOrCreateCity(cityName) {
  // 🔽 ใช้ฟังก์ชัน findCityByNameInDB ที่เราสร้างขึ้น
  let city = await findCityByNameInDB(cityName);

  if (city) {
    return city;
  }

  const geoRes = await axios.get("https://api.openweathermap.org/geo/1.0/direct", {
    params: { q: cityName, limit: 1, appid: process.env.OWM_KEY },
  });

  const geo = geoRes.data?.[0];
  if (!geo) {
    createError(404, `City '${cityName}' not found from external API`);
  }

  let existingCityByCoords = await prisma.city.findFirst({
    where: { latitude: geo.lat, longitude: geo.lon },
  });

  if (existingCityByCoords) {
    return existingCityByCoords;
  }

  try {
    city = await prisma.city.create({
      data: {
        cityName: geo.name,
        locationName: geo.local_names?.th || geo.name,
        latitude: geo.lat,
        longitude: geo.lon,
      },
    });
    return city;
  } catch (error) {
    if (error.code === 'P2002') {
      console.warn(`⚠️ Race condition for '${cityName}'. Finding existing city again.`);
      return await prisma.city.findFirst({ where: { latitude: geo.lat, longitude: geo.lon }});
    }
    throw error;
  }
}

/**
 * ดึงข้อมูลอากาศล่าสุดของเมือง พร้อมระบบ Cache
 * @param {string} cityName - ชื่อเมือง
 * @returns {Promise<object>} ข้อมูลอากาศ
 */
export async function getCurrentWeatherByCityName(cityName) {
  const city = await getOrCreateCity(cityName);
  if (!city) createError(500, "Could not find or create city.");

  const cacheDuration = new Date(Date.now() - CACHE_DURATION_MINUTES * 60 * 1000);
  const cachedWeather = await prisma.weatherData.findUnique({
    where: { cityId: city.id },
  });

  if (cachedWeather && cachedWeather.timestamp > cacheDuration) {
    return {
      city: city.locationName,
      temperature: cachedWeather.temperature,
      humidity: cachedWeather.humidity,
      windSpeed: cachedWeather.windSpeed,
      description: cachedWeather.description,
      time: cachedWeather.timestamp,
      source: "from_cache",
    };
  }

  const weatherRes = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      lat: city.latitude,
      lon: city.longitude,
      units: "metric",
      lang: "th",
      appid: process.env.OWM_KEY,
    },
  });

  const w = weatherRes.data;

  const updatedWeather = await prisma.weatherData.upsert({
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

  return {
    city: city.locationName,
    temperature: updatedWeather.temperature,
    humidity: updatedWeather.humidity,
    windSpeed: updatedWeather.windSpeed,
    description: updatedWeather.description,
    time: updatedWeather.timestamp,
    source: "from_api_or_updated",
  };
}

/**
 * ดึงข้อมูลพยากรณ์อากาศล่วงหน้า 5 วัน
 * @param {number} cityId - ID ของเมือง
 * @returns {Promise<object>} ข้อมูลพยากรณ์
 */
export async function getFiveDayForecastByCityId(cityId) {
  const city = await prisma.city.findUnique({ where: { id: cityId } });
  if (!city) {
    createError(404, "City not found in database");
  }

  const forecastRes = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
    params: {
      lat: city.latitude,
      lon: city.longitude,
      units: "metric",
      lang: "th",
      appid: process.env.OWM_KEY,
    },
  });

  const forecasts = forecastRes.data.list.map((item) => ({
    time: item.dt_txt,
    temperature: item.main.temp,
    feels_like: item.main.feels_like,
    humidity: item.main.humidity,
    description: item.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
  }));

  return {
    city: { id: city.id, name: city.locationName },
    forecasts,
  };
}
