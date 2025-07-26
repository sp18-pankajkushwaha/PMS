import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import dbConnect from './src/config/dbConnection.js'
import routes from './src/products/routes.js'

const app=express()
app.use(express.json())
const PORT=process.env.PORT

app.use(routes)




dbConnect()
app.listen(PORT,(req,res)=>{
    console.log(`Connected to Port: ${PORT}`)
})



