import express from 'express'
const app=express()

app.use(express.json)
const port=4000

app.listen(port, (req,res)=>{
    console.log(`Connected to Port ${port}`)
})
