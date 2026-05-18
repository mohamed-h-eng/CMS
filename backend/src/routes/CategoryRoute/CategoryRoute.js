import { Router } from "express";
import * as CategoryController from "../../controllers/CategoryController/Category.controller.js";
import { upload } from "../../utils/multer/multer.js";

export const categoryRoute = Router();

categoryRoute.post(
  "/create/:eventId",
  upload.single("icon"),
  CategoryController.createCategory,
);
