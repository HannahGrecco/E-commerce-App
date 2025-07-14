import express from "express"
import dotenv from 'dotenv'
import connectDB from './src/database/db.js'
import authRoutes from './src/routes/authRoutes.js'
dotenv.config();

const app = express()
connectDB()

app.use(express.json())

app.use('/api/auth', authRoutes)


app.listen (3000)

