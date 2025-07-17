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

favoriteRoute.post("/", authMiddleware, async (req, res, next) => {
  
  // ✨ HIGHLIGHT: รับข้อมูลได้ทั้ง cityId และ cityName
  const { cityId, cityName, favoriteName } = req.body;

  // ตรวจสอบว่ามีข้อมูลที่จำเป็นส่งมาหรือไม่
  if (!cityId && !cityName) {
    return next(createError(400, "Either cityId or cityName is required."));
  }

  try {
    // ✨ HIGHLIGHT: ส่งข้อมูลเมืองไปให้ Service ในรูปแบบ object
    const cityInfo = cityId ? { cityId } : { cityName };
    const newFavorite = await addFavorite(req.user.userId, cityInfo, favoriteName);

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
