import mongoose from "mongoose";

/*defining the category schema */
const categorySchema=new mongoose.Schema({

    name:{
       type: String, 
       required: true, 
       unique: true
    }

})

export const Category=mongoose.model("Category",categorySchema)