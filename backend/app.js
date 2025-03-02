import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'

const app = express()

const allowedOrigins = ['http://localhost:5173']

app.use(express.json()) //its recieve information from frontend
app.use(cors({origin: allowedOrigins ,credentials: true}))
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

export {app}