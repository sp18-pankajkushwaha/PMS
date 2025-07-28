import express from 'express'
import productRouter from "../products/routes.js";

const router=express.Router()

router.use('/products', productRouter)

export default router
