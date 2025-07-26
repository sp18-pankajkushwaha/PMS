import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
import dbConnect from './src/config/dbConnection.js'
import routes from './src/products/routes.js'

dotenv.config()
app.use(routes)

dbConnect()
app.listen(PORT,(req,res)=>{
    console.log(`Connected to Port: ${PORT}`)
})

