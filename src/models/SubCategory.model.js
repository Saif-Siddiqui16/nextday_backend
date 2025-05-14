import mongoose from "mongoose";

/*defining the category schema */

const subCategorySchema=new mongoose.Schema({
name: { 
    type: String, 
    required: true 
},
  categoryId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category' 
},
  quantity: { 
    type: Number, 
    default: 10 
},
  price: { 
    type: Number, 
    required: true 
}
})

export const SubCategory=mongoose.model("SubCategory",subCategorySchema)