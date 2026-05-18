import mongoose from "mongoose";
import { categoryModel } from "../../models/category.model.js";
import * as categoryService from "../../services/CategoryService/category.service.js";
import { AppError } from "../../utils/AppError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

export const createCategory = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body;
  const { eventId } = req.params;

  console.log(req.params);

  const data = await categoryService.createCategoryService(eventId, {
    title,
    description,
    icon: req.file.filename,
  });

  return res.status(201).json({
    message: "Create Category Successfully",
    data: data,
  });
});
