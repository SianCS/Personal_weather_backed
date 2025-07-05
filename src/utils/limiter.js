import rateLimit from 'express-rate-limit'


export const apiLimiter = rateLimit({
  windowMs : 15 * 60 * 1000,
  max : 100,
  standardHeaders : true,
  legacyHeaders :false,
  message: { error: "Too many requests, please try again after 15 minutes." }
})

export const authLimiter = rateLimit({
  windowMs : 10 * 60 * 1000,
  max : 100,
  standardHeaders : true,
  legacyHeaders :false,
  message: { error: "Too many requests, please try again after 10 minutes." }
})