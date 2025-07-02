import jwt from 'jsonwebtoken'

export function authMiddleware(req,res,next) {
  const auth = req.headers.authorization
  if (!auth) return res.status(401).json({error : "Missing token"})

    const token = auth.split(" ")[1]
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET)
      req.user = decode
      next()
    } catch (error) {
      res.status(401).json({ error : "Invalid token"})
    }
}