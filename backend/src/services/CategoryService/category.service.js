import mongoose from "mongoose";
import { categoryModel } from "../../models/category.model.js";
import { AppError } from "../../utils/AppError.js";
import { Event } from "../../models/event.model.js";

export async function createCategoryService(id, data) {
  const eventId = await Event.findOne({ id });
  if (!eventId) {
    throw new Error("Event Id is Not Existed..", { cause: 404 });
  }

  console.log(eventId);
  //TODO
  if (!data) {
    throw new Error("title, description and icon are Required", { cause: 404 });
  }
  return await categoryModel.create(id, data);
}




export async function getAllCategoryService() {
  return await categoryModel.find();
}

export async function findCategoryByIdService(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invaild Category ID, Or Not found", 404);
  }
  const category = await categoryModel.findOne(id);
  return category;
}

export async function updateCategoryService(id, data) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new AppError("Invaild Category ID, Or Not found", 404);
  }

  if (!Object.assign(findCategoryByIdService, data)) {
    throw new AppError("Data is required");
  }
  const updateCategory = await categoryModel.updateMany(id, data);
  return updateCategory;
}

export async function deleteCategoryByIdService(id) {
  return await categoryModel.findByIdAndDelete(id);
}
