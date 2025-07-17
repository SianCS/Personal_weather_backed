import axios from "axios";
import prisma from "../config/prisma.config.js";
import { createError } from "../utils/createError.js";

// --- Helper Functions ---

const roundCoord = (num) => parseFloat(num.toFixed(4));

/**
 * ฟังก์ชันสำหรับค้นหาเมืองใน DB โดยใช้ชื่อ หรือ พิกัด
 */
export async function findCityByNameInDB(cityName, lat, lon) {
    if (typeof lat === 'number' && typeof lon === 'number') {
        const cityByCoords = await prisma.city.findFirst({
            where: {
                latitude: roundCoord(lat),
                longitude: roundCoord(lon),
            },
        });
        if (cityByCoords) return cityByCoords;
    }

    if (cityName) {
        const searchName = cityName.trim().toLowerCase();
        const allCities = await prisma.city.findMany({ take: 5000 });
        return allCities.find(
            (c) =>
                c.cityName.toLowerCase() === searchName ||
                c.locationName.toLowerCase() === searchName
        );
    }

    return null;
}

/**
 * หาหรือสร้างเมืองจากชื่อ (ใช้ได้กับระบบค้นหา)
 */
export async function getOrCreateCity(cityName) {
    let city = await findCityByNameInDB(cityName);
    if (city) return city;

    const geoRes = await axios.get("https://api.openweathermap.org/geo/1.0/direct", {
        params: { q: cityName, limit: 1, appid: process.env.OWM_KEY },
    });

    const geo = geoRes.data?.[0];
    if (!geo) createError(404, `City '${cityName}' not found from external API`);

    city = await findCityByNameInDB(undefined, geo.lat, geo.lon);
    if (city) return city;

    try {
        return await prisma.city.create({
            data: {
                cityName: geo.name,
                locationName: geo.local_names?.th || geo.name,
                latitude: roundCoord(geo.lat),
                longitude: roundCoord(geo.lon),
            },
        });
    } catch (error) {
        if (error.code === 'P2002') {
            return await findCityByNameInDB(undefined, geo.lat, geo.lon);
        }
        throw error;
    }
}

/**
 * ✅ ใหม่: หาหรือสร้างเมืองจากพิกัด (ใช้กับ map click)
 */
export async function getOrCreateCityByCoords(lat, lon) {
    const latitude = roundCoord(lat);
    const longitude = roundCoord(lon);

    let city = await findCityByNameInDB(undefined, latitude, longitude);
    if (city) return city;

    const geoRes = await axios.get("https://api.openweathermap.org/geo/1.0/reverse", {
        params: { lat: latitude, lon: longitude, limit: 1, appid: process.env.OWM_KEY }
    });

    const geo = geoRes.data?.[0];
    if (!geo) createError(404, "Cannot resolve city name from coordinates");

    try {
        return await prisma.city.create({
            data: {
                cityName: geo.name,
                locationName: geo.local_names?.th || geo.name,
                latitude,
                longitude,
            }
        });
    } catch (error) {
        if (error.code === 'P2002') {
            return await findCityByNameInDB(undefined, latitude, longitude);
        }
        throw error;
    }
}

/**
 * ดึงข้อมูลอากาศจากชื่อเมือง (พร้อม cache)
 */
export async function getCurrentWeatherByCityName(cityName) {
    const city = await getOrCreateCity(cityName);
    if (!city) createError(500, "Could not find or create city.");

    const CACHE_DURATION_MINUTES = 15;
    const cacheDuration = new Date(Date.now() - CACHE_DURATION_MINUTES * 60 * 1000);
    const cachedWeather = await prisma.weatherData.findUnique({
        where: { cityId: city.id },
    });

    if (cachedWeather && cachedWeather.timestamp > cacheDuration) {
        return { cityId: city.id, city: city.locationName, latitude: city.latitude, longitude: city.longitude, ...cachedWeather, source: "from_cache" };
    }

    const weatherRes = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: { lat: city.latitude, lon: city.longitude, units: "metric", lang: "th", appid: process.env.OWM_KEY },
    });
    const w = weatherRes.data;

    const forecastRes = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
        params: { lat: city.latitude, lon: city.longitude, cnt: 1, appid: process.env.OWM_KEY }
    });
    const chanceOfRain = Math.round((forecastRes.data?.list?.[0]?.pop || 0) * 100);

    const weatherPayload = {
        dt: w.dt, timezone: w.timezone, icon: w.weather[0].icon, chanceOfRain,
        timestamp: new Date(w.dt * 1000), temperature: w.main.temp,
        humidity: w.main.humidity, windSpeed: w.wind.speed, description: w.weather[0].description,
    };

    const updatedWeather = await prisma.weatherData.upsert({
        where: { cityId: city.id },
        update: weatherPayload,
        create: { cityId: city.id, ...weatherPayload },
    });

    return { cityId: city.id, city: city.locationName, latitude: city.latitude, longitude: city.longitude, ...updatedWeather, source: "from_api_or_updated" };
}

/**
 * ✅ ดึงข้อมูลอากาศจากพิกัด (สำหรับการคลิก map)
 */
export async function getWeatherByCoords(lat, lon) {
    const city = await getOrCreateCityByCoords(lat, lon);
    if (!city) createError(500, "Could not find or create city from coordinates.");

    const weatherRes = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: { lat, lon, units: "metric", lang: "th", appid: process.env.OWM_KEY },
    });
    const w = weatherRes.data;

    const forecastRes = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
        params: { lat, lon, cnt: 1, appid: process.env.OWM_KEY }
    });
    const chanceOfRain = Math.round((forecastRes.data?.list?.[0]?.pop || 0) * 100);

    const weatherPayload = {
        dt: w.dt, timezone: w.timezone, icon: w.weather[0].icon, chanceOfRain,
        timestamp: new Date(w.dt * 1000), temperature: w.main.temp,
        humidity: w.main.humidity, windSpeed: w.wind.speed, description: w.weather[0].description,
    };

    await prisma.weatherData.upsert({
        where: { cityId: city.id },
        update: weatherPayload,
        create: { cityId: city.id, ...weatherPayload },
    });

    return {
        cityId: city.id,
        city: city.locationName,
        latitude: city.latitude,
        longitude: city.longitude,
        ...weatherPayload,
        source: "from_api_by_coords",
    };
}

/**
 * ดึงพยากรณ์อากาศ 5 วัน (พร้อม Cache)
 */
export async function getFiveDayForecastByCityId(cityId) {
    const city = await prisma.city.findUnique({ where: { id: cityId } });
    if (!city) createError(404, "City not found in database");

    const THREE_HOURS_AGO = new Date(Date.now() - 3 * 60 * 60 * 1000);
    const cachedForecast = await prisma.forecast.findFirst({
        where: { cityId, fetchedAt: { gte: THREE_HOURS_AGO } },
        orderBy: { fetchedAt: 'desc' }
    });

    if (cachedForecast) {
        return { city: { id: city.id, name: city.locationName }, forecasts: JSON.parse(cachedForecast.data) };
    }

    const forecastRes = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
        params: { lat: city.latitude, lon: city.longitude, units: "metric", lang: "th", appid: process.env.OWM_KEY },
    });

    const forecasts = forecastRes.data.list.map((item) => ({
        time: item.dt_txt, temperature: item.main.temp, feels_like: item.main.feels_like,
        humidity: item.main.humidity, description: item.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        chanceOfRain: Math.round((item.pop || 0) * 100),
    }));

    await prisma.forecast.deleteMany({ where: { cityId } });
    await prisma.forecast.create({
        data: {
            cityId,
            forecastTime: new Date(forecastRes.data.list[0].dt * 1000),
            data: JSON.stringify(forecasts),
        }
    });

    return { city: { id: city.id, name: city.locationName }, forecasts };
}
