import { Router } from "express";
import * as CategoryController from "../../controllers/CategoryController/Category.controller.js";
import { upload } from "../../utils/multer/multer.js";

export const categoryRoute = Router();

categoryRoute.post(
  "/create",
  upload.single("icon"),
  CategoryController.createCategory,
);

categoryRoute.get("/:categoryId", CategoryController.getCategoryById);
categoryRoute.get("/", CategoryController.getAllCategory);
categoryRoute.put("/update/:categoryId", CategoryController.updateCategory);
