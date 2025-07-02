import app from "./app.js"
import shutdown from './utils/shutdown.util.js'
import dotenv from 'dotenv'

dotenv.config()



const PORT = process.env.PORT || 8000


app.listen(PORT , ()=> console.log(`Server Running on:`, PORT))

process.on("SIGINT", ()=>	shutdown('SIGINT'))
process.on("SIGTERM", ()=>	shutdown('SIGTERM'))

process.on("uncaughtException", ()=>	shutdown('uncaughtException'))
process.on("unhandledRejection", ()=>	shutdown('unhandledRejection'))