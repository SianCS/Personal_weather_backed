import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma.config.js";
// 🔽 1. Import ฟังก์ชัน createError ที่คุณสร้างขึ้น
import { createError } from "../utils/createError.js";

/**
 * บริการสำหรับสมัครสมาชิกผู้ใช้ใหม่
 * @param {string} email - อีเมลของผู้ใช้
 * @param {string} password - รหัสผ่านของผู้ใช้
 * @returns {Promise<object>} ข้อมูลผู้ใช้ใหม่ (ไม่รวมรหัสผ่าน)
 * @throws {Error} หากอีเมลถูกใช้ไปแล้ว
 */
export async function registerUser(email, password) {
  // 1. ตรวจสอบว่ามีอีเมลนี้ในระบบแล้วหรือยัง
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    // 🔽 2. เรียกใช้ createError เพื่อโยนข้อผิดพลาด
    createError(409, "Email is already in use"); // 409 Conflict
  }

  // 3. เข้ารหัสรหัสผ่าน
  const hashedPassword = await bcrypt.hash(password, 10);

  // 4. สร้างผู้ใช้ใหม่ในฐานข้อมูล
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  // 5. คืนค่าข้อมูลผู้ใช้ (ไม่รวมรหัสผ่าน)
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

/**
 * บริการสำหรับล็อกอินผู้ใช้
 * @param {string} email - อีเมลของผู้ใช้
 * @param {string} password - รหัสผ่านของผู้ใช้
 * @returns {Promise<object>} Token และข้อมูลผู้ใช้
 * @throws {Error} หากข้อมูลล็อกอินไม่ถูกต้อง
 */
export async function loginUser(email, password) {
  // 1. ค้นหาผู้ใช้จากอีเมล
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    // 🔽 เรียกใช้ createError เพื่อโยนข้อผิดพลาด
    createError(401, "Invalid email or password"); // 401 Unauthorized
  }

  // 2. เปรียบเทียบรหัสผ่าน
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    // 🔽 เรียกใช้ createError เพื่อโยนข้อผิดพลาด
    createError(401, "Invalid email or password");
  }

  // 3. สร้าง JWT Token
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token มีอายุ 7 วัน
  });

  // 4. คืนค่า Token และข้อมูลผู้ใช้
  return {
    message: "Login successful",
    token,
    user: {
      id: user.id,
      email: user.email,
    },
  };
}
