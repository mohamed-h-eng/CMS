import { Router } from "express";
import * as UserController from "../controllers/userController/user.controller.js";

const userRouter = Router();

userRouter.post("/add", UserController.createUser);
userRouter.get("/:id", UserController.getUserById);
userRouter.get("/", UserController.getUsers);

export default userRouter;
