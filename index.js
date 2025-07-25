import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config()
const app=express()
app.use(express.json())
const PORT=process.env.PORT

const MONGO_URI=process.env.MONGO_URI

mongoose.connect(MONGO_URI)
        .then(()=>console.log('Connected to MongoDB'))
        .catch((err)=>console.log(err)) 

app.listen(PORT, (req,res)=>{
    console.log(`Connected to Port ${PORT}`)
})
