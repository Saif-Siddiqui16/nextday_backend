import express from "express"
import dotenv from "dotenv"
import { connectToDb } from "./db/db.js"
import categoryRoutes from "./routes/Category.route.js"
import subCategoryRoutes from "./routes/SubCategory.route.js"
import cartRoutes from "./routes/Cart.route.js"
import bodyParser from "body-parser"


/*for using variables from .env file */
dotenv.config()


const PORT=process.env.PORT || 3000;
const app=express()

app.use(express.json())

app.use(bodyParser.json())

/*routes */
app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subCategoryRoutes);
app.use('/api/cart', cartRoutes);

app.listen(PORT,()=>{
    connectToDb()
    console.log(`server is running : ${PORT}`)
})
