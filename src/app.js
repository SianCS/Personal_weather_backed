import express from 'express'
import cors from 'cors'
import weatherRouter from './routes/weather.route.js'
import authRouter from './routes/auth.route.js'

const app = express()

app.use(express.json())

app.use("/api/weather", weatherRouter)
app.use("/api/auth", authRouter)






export default app