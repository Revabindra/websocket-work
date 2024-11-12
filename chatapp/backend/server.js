import express from 'express'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'

import router from './routes/routes.auth.js';
import connection from './db/mongodb.connection.js'
import messageRouter from './routes/routes.message.js'

dotenv.config()
const PORT=process.env.PORT
const app=express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/auth',router)
app.use('/api/v1/message',messageRouter)

app.listen(PORT,()=>{
    connection();
    console.log("server is running at: ",PORT)
})











