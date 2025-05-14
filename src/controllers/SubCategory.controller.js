import { z } from "zod";
import { SubCategory } from "../models/SubCategory.model.js";


const subCategorySchema = z.object({
  name: z.string(),
  categoryId: z.string(),
  quantity: z.number().int().positive(),
  price: z.number().positive(),
});


/*create subcategory controller */
export const createSubCategory = async (req, res) => {
  try {
    const parsedBody = subCategorySchema.safeParse(req.body);
    if (!parsedBody.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: parsedBody.error.errors,
      });
    }

    const { name, categoryId, quantity, price } = parsedBody.data;

    const subcategory = await SubCategory.create({
      name,
      categoryId,
      quantity,
      price,
    });

    return res.status(200).json({
      message: "Sub-category created successfully",
      subcategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
