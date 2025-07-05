import express from "express";
// 🔽 1. Import services และ middlewares ที่จำเป็น
import { registerUser, loginUser } from "../services/auth.service.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
// 🔽 แก้ไข: Import ทุกอย่างจากไฟล์ validator ที่เดียว
import { validate, registerSchema, loginSchema } from "../validations/validator.js";
import prisma from "../config/prisma.config.js";
import { createError } from "../utils/createError.js";

const authRouter = express.Router();

// --- Register ---
authRouter.post("/register", validate(registerSchema), async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // 🔽 2. เรียกใช้ service เพื่อสมัครสมาชิก
    const newUser = await registerUser(email, password);
    res.status(201).json({ message: "Registration successful", user: newUser });
  } catch (err) {
    // 🔽 3. ส่ง Error ต่อไปให้ error middleware จัดการ
    next(err);
  }
});

// --- Login ---
authRouter.post("/login", validate(loginSchema), async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // 🔽 เรียกใช้ service เพื่อล็อกอิน
    const result = await loginUser(email, password);
    res.json(result);
  } catch (err) {
    // 🔽 ส่ง Error ต่อไปให้ error middleware จัดการ
    next(err);
  }
});

// --- Get Current User (/me) ---
// ส่วนนี้ Logic ไม่ซับซ้อน สามารถคงไว้ใน Route ได้
authRouter.get("/me", authMiddleware, async (req, res, next) => {
  try {
    // req.user.userId ถูกตั้งค่ามาจาก authMiddleware
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        email: true,
        createdAt: true,
      },
    });

    if (!user) {
      // ใช้ createError ที่คุณสร้างไว้
      return next(createError(404, "User not found"));
    }
    
    res.json(user);
  } catch (err) {
      next(err);
  }
});

export default authRouter;
