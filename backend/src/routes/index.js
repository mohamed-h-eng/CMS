import { Router } from "express";
import userRouter from "./user.routes.js";
import { eventRouter } from "./EventRoute/event.router.js";
import { categoryRoute } from "./CategoryRoute/CategoryRoute.js";

const apiRouter = Router();

apiRouter.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "API is running",
  });
});

apiRouter.use("/users", userRouter);
apiRouter.use("/event", eventRouter);
apiRouter.use("/category", categoryRoute);

export default apiRouter;
