"use server";

import { CreateCategoryParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import Category from "../database/models/category.model";

export const createCategory = async ({
  categoryName,
}: CreateCategoryParams) => {
  try {
    await connectToDatabase();

    const newCategory = await Category.create({ name: categoryName });
    console.log("newCategory", newCategory);
    console.log("parsed", JSON.parse(newCategory));
    console.log("stringified", JSON.parse(JSON.stringify(newCategory)));
    return newCategory;
  } catch (error) {
    handleError(error);
  }
};

export const getAllCategories = async () => {
  try {
    await connectToDatabase();

    const allCategories = await Category.find();
    console.log("newCategory", allCategories);
    //   console.log('parsed', JSON.parse(allCategories))
    console.log("stringified", JSON.parse(JSON.stringify(allCategories)));
    return JSON.parse(JSON.stringify(allCategories));
  } catch (error) {
    handleError(error);
  }
};
