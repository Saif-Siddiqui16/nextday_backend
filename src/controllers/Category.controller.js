import { z } from "zod";
import { Category } from "../models/Category.model.js";


const categorySchema = z.object({
  name: z.string().min(1)
});


/*create category controller */

export const createCategory = async (req, res) => {
  try {
    const parsedBody = categorySchema.safeParse(req.body);
    if (!parsedBody.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: parsedBody.error.errors,
      });
    }

    const category = await Category.create({
      name: parsedBody.data.name,
    });

    return res.status(200).json({
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
