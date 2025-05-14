import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

/*Database connection */
export const connectToDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Db is connected")
    } catch (error) {
        console.log(error)
    }
}