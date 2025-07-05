import express from 'express'
import cors from 'cors'
import weatherRouter from './routes/weather.route.js'
import authRouter from './routes/auth.route.js'
import favoriteRoute from './routes/favorite.route.js'
import cityRoute from './routes/city.route.js'
import error from './utils/error.js'
import { notFound } from './utils/notfound.js'

const app = express()

app.use(express.json())

app.use("/api/weather", weatherRouter)
app.use("/api/auth", authRouter)
app.use("/api/favorites", favoriteRoute);
app.use("/api/cities", cityRoute)

app.use(error)

app.use(notFound)






export default app