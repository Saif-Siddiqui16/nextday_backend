import express from "express"
import { addToCart, getAllCartItems } from "../controllers/Cart.controller.js"

const router=express.Router()


router.post("/add",addToCart)
router.get("/",getAllCartItems)

export default router