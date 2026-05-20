import { Router } from "express";
import * as UserController from "../../controllers/userController/user.controller.js";

export const userRouter = Router();

userRouter.post("/add", UserController.createUser);
userRouter.get("/:id", UserController.getUserById);
userRouter.get("/", UserController.getUsers);
