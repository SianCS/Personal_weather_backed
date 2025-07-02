import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma.config.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

// register
authRouter.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existUser) {
     return res.status(400).json({ error: "Email already used" });
    }

    const hashed = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: { email, password: hashed },
    });

    res.status(201).json({ message: "Register Success" });
  } catch (err) {
    console.log(err)
    res.status(400).json({ error: "Something Whrng GG" , });
  }
});

// login
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user)
    return res.status(400).json({ message: "Email or Password Worng" });
  const match = await bcrypt.compare(password, user.password);
  if (!match)
    return res.status(400).json({ message: "Email or Password Worng" });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
    },
  });
});

// Getme

authRouter.get("/me" , authMiddleware, async (req ,res) => {
  const user = await prisma.user.findUnique({
    where : {id : req.user.userId},
    select : {
      id : true,
      email : true ,
      createdAt : true
    }
  })
  if (!user) return res.status(404).json({ error : "User not found"})
    res.json(user)
})


export default authRouter