import express from "express"
import { createSubCategory } from "../controllers/SubCategory.controller.js"

const router=express.Router()


router.post("/",createSubCategory)

export default router