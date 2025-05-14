import { z } from "zod";
import { SubCategory } from "../models/SubCategory.model.js";
import { Cart } from "../models/Cart.model.js";

const addToCartSchema = z.object({
  subCategoryId: z.string(),
  quantity: z.number().positive(),
});

/*add data to cart */

export const addToCart = async (req, res) => {
  try {
    const parsed = addToCartSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ errors: parsed.error.errors });
    }

    const { subCategoryId, quantity } = parsed.data;

    const item = await SubCategory.findById(subCategoryId);
    if (!item || item.quantity < quantity) {
      return res.status(400).json({ message: "Item not available or insufficient stock" });
    }

    let cart = await Cart.findOne();
    if (!cart) cart = new Cart({ items: [] });

    const existing = cart.items.find(i => i.subCategoryId.toString() === subCategoryId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.items.push({ subCategoryId, quantity });
    }

    item.quantity -= quantity;

    await item.save();
    await cart.save();

    return res.status(200).json({ message: "Item added to cart", cart });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

/*fetch cart data */
export const getAllCartItems=async(req,res)=>{
    try {
        const cart=await Cart.findOne().populate('items.subCategoryId')
            return res.status(200).json(cart);
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}