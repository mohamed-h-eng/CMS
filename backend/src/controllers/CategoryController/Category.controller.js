import mongoose from "mongoose";
import { categoryModel } from "../../models/category.model.js";
import * as categoryService from "../../services/CategoryService/category.service.js";
import { AppError } from "../../utils/AppError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

export const createCategory = asyncHandler(async (req, res, next) => {
  const { title, description, icon } = req.body;

  const data = await categoryService.createCategoryService({
    title,
    description,
    icon: req.file.filename,
  });

  const ExistDate = await categoryModel.find(data);

  if (ExistDate) {
    return next(new AppError("This Category is Already Existed", 400));
  }

  return res.status(201).json({
    message: "Create Category Successfully",
    data: data,
  });
});

export const getCategoryById = asyncHandler(async (req, res, next) => {
  const { categoryId } = req.params;
  const Category = await categoryService.findCategoryByIdService(categoryId);
  res.status(200).json({
    message: "Done",
    data: Category,
  });
});

export const getAllCategory = asyncHandler(async (req, res, next) => {
  const categories = await categoryService.getAllCategoryService();
  res.status(200).json({
    message: "Successfully",
    data: categories,
  });
});

export const updateCategory = asyncHandler(async (req, res, next) => {
  const { categoryId } = req.params;
  const { date } = req.body;

  const categories = await categoryService.updateCategoryService(
    categoryId,
    date,
  );
  res.status(200).json({
    message: "categories Updated Successfully",
    date: categories,
  });
});
