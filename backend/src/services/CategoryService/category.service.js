import mongoose from "mongoose";
import { categoryModel } from "../../models/category.model.js";
import { AppError } from "../../utils/AppError.js";
import { Event } from "../../models/event.model.js";

export async function createCategoryService(data) {
  return await categoryModel.create(data);
}

export async function findCategoryByIdService(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invaild Category ID, Or Not found", 404);
  }
  const category = await categoryModel.findById(id);
  if (!category) {
    throw new AppError("Category is Not Found..", 404);
  }
  return category;
}

export async function getAllCategoryService() {
  return await categoryModel.find();
}

export async function updateCategoryService(id, data) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invaild Category ID, Or Not found", 404);
  }

  if (!Object.assign(findCategoryByIdService, data)) {
    throw new AppError("Data is required");
  }
  // const test = await categoryModel.findById(id);
  // return console.log(typeof test);

  const updateCategory = await categoryModel.findByIdAndUpdate(id, data, {
    new: true,
    returnDocument: true,
  });
  console.log(updateCategory);

  return updateCategory;
}

export async function deleteCategoryByIdService(id) {
  return await categoryModel.findByIdAndDelete(id);
}
