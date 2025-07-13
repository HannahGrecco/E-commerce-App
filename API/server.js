import express from "express"
import dotenv from 'dotenv'
import connectDB from './src/database/db.js'
dotenv.config();

const app = express()
connectDB()



app.listen (3000)

