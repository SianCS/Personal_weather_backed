import axios from "axios";
import prisma from "../config/prisma.config.js";
import { createError } from "../utils/createError.js";

const CACHE_DURATION_MINUTES = 10;

/**
 * 🔽 เพิ่ม: ฟังก์ชันสำหรับค้นหาเมืองใน DB เท่านั้น
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
 * @throws {Error} หากไม่พบเมืองจาก API
 */
export async function getOrCreateCity(cityName) {
  // 🔽 ใช้ฟังก์ชัน findCityByNameInDB ที่เราเพิ่งสร้าง
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
      ...cachedWeather,
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

  // --- เพิ่ม: ดึงข้อมูล "โอกาสเกิดฝน" จาก Forecast API ---
  const forecastRes = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
      params: { lat: city.latitude, lon: city.longitude, cnt: 1, appid: process.env.OWM_KEY }
  });
  const chanceOfRain = Math.round((forecastRes.data?.list?.[0]?.pop || 0) * 100);
  // ----------------------------------------------------

  const updatedWeather = await prisma.weatherData.upsert({
    where: { cityId: city.id },
    update: {
      dt: w.dt,
      timezone: w.timezone,
      icon: w.weather[0].icon,
      chanceOfRain: chanceOfRain, // ✅ แก้ไข: กลับไปใช้ chanceOfRain
      timestamp: new Date(w.dt * 1000),
      temperature: w.main.temp,
      humidity: w.main.humidity,
      windSpeed: w.wind.speed,
      description: w.weather[0].description,
    },
    create: {
      cityId: city.id,
      dt: w.dt,
      timezone: w.timezone,
      icon: w.weather[0].icon,
      chanceOfRain: chanceOfRain, // ✅ แก้ไข: กลับไปใช้ chanceOfRain
      timestamp: new Date(w.dt * 1000),
      temperature: w.main.temp,
      humidity: w.main.humidity,
      windSpeed: w.wind.speed,
      description: w.weather[0].description,
    },
  });

  return {
    city: city.locationName,
    ...updatedWeather,
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
    chanceOfRain: Math.round((item.pop || 0) * 100), // ✅ แก้ไข: กลับไปใช้ chanceOfRain
  }));

  return {
    city: { id: city.id, name: city.locationName },
    forecasts,
  };
}

/**
 * ดึงข้อมูลอากาศล่าสุดจากพิกัด (ละติจูด/ลองจิจูด)
 * @param {number} lat - ละติจูด
 * @param {number} lon - ลองจิจูด
 * @returns {Promise<object>} ข้อมูลอากาศล่าสุด ณ ตำแหน่งนั้น
 * @throws {Error} หากเกิดข้อผิดพลาดจาก API
 */
export async function getWeatherByCoords(lat, lon) {
  try {
    const weatherRes = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat,
          lon,
          units: "metric",
          lang: "th",
          appid: process.env.OWM_KEY,
        },
      }
    );

    const w = weatherRes.data;

    // --- เพิ่ม: ดึงข้อมูล "โอกาสเกิดฝน" จาก Forecast API ---
    const forecastRes = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
        params: { lat, lon, cnt: 1, appid: process.env.OWM_KEY }
    });
    const chanceOfRain = Math.round((forecastRes.data?.list?.[0]?.pop || 0) * 100);
    // ----------------------------------------------------

    return {
      city: w.name,
      dt: w.dt,
      timezone: w.timezone,
      icon: w.weather[0].icon,
      chanceOfRain: chanceOfRain, // ✅ แก้ไข: กลับไปใช้ chanceOfRain
      temperature: w.main.temp,
      humidity: w.main.humidity,
      windSpeed: w.wind.speed,
      description: w.weather[0].description,
      time: new Date(w.dt * 1000),
      source: "from_api_by_coords",
    };
  } catch (apiError) {
    console.error("❌ OpenWeatherMap API Error (by-coords):", apiError.response ? apiError.response.data : apiError.message);
    createError(502, "Failed to fetch weather data from external service.");
  }
}
