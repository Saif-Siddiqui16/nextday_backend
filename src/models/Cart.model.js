import mongoose from "mongoose";

/*defining the cart schema */
const cartSchema = new mongoose.Schema({
  items: [
    {
      subCategoryId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'SubCategory' 
    },
      quantity: Number
    }
  ]
});


export const Cart=mongoose.model("Cart",cartSchema)