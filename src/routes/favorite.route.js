import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createError } from "../utils/createError.js";

// 🔽 1. Import services ที่จะใช้
// 🔽 ใช้ฟังก์ชันค้นหาอย่างเดียว ไม่สร้างเมืองใหม่
import { findCityByNameInDB } from "../services/weather.service.js"; 
import { 
  addFavorite, 
  getFavoritesByUserId, 
  updateFavoriteName, 
  deleteFavorite 
} from "../services/favorite.service.js";

const favoriteRoute = express.Router();

// ✅ POST /favorites - เพิ่มรายการโปรด (เวอร์ชันปรับปรุง)
favoriteRoute.post("/", authMiddleware, async (req, res, next) => {
  const { cityName, favoriteName } = req.body;

  if (!cityName?.trim()) {
    return next(createError(400, "City name is required"));
  }

  try {
    // 🔽 2. ค้นหาเมืองใน DB ของเราเท่านั้น
    const city = await findCityByNameInDB(cityName);

    // 🔽 3. ถ้าไม่เจอ ให้แจ้งผู้ใช้
    if (!city) {
      return next(createError(404, `City '${cityName}' not found. Please search for it first to add it to our system.`));
    }
    
    // 🔽 4. เรียกใช้ service เพื่อเพิ่ม favorite
    const newFavorite = await addFavorite(req.user.userId, city.id, favoriteName);

    res.status(201).json({ message: "Added to favorites", favorite: newFavorite });
  } catch (err) {
    next(err);
  }
});

// ✅ GET /favorites - ดึงรายการโปรดทั้งหมด
favoriteRoute.get("/", authMiddleware, async (req, res, next) => {
  try {
    const favorites = await getFavoritesByUserId(req.user.userId);
    res.json({ favorites });
  } catch (err) {
    next(err);
  }
});

// ✅ PATCH /favorites/:id - แก้ไขชื่อ favorite
favoriteRoute.patch("/:id", authMiddleware, async (req, res, next) => {
  const favoriteId = parseInt(req.params.id);
  const { favoriteName } = req.body;

  if (isNaN(favoriteId)) {
    return next(createError(400, "Invalid favorite ID"));
  }

  try {
    const updatedFavorite = await updateFavoriteName(req.user.userId, favoriteId, favoriteName);
    res.json({ message: "Favorite name updated", favorite: updatedFavorite });
  } catch (err) {
    next(err);
  }
});

// ✅ DELETE /favorites/:id - ลบรายการโปรด
favoriteRoute.delete("/:id", authMiddleware, async (req, res, next) => {
  const favoriteId = parseInt(req.params.id);

  if (isNaN(favoriteId)) {
    return next(createError(400, "Invalid favorite ID"));
  }

  try {
    await deleteFavorite(req.user.userId, favoriteId);
    res.status(200).json({ message: "Favorite deleted successfully" });
  } catch (err) {
    next(err);
  }
});

export default favoriteRoute;
