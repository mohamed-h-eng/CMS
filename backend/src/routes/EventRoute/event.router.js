import { Router } from "express";
import * as eventController from "../../controllers/eventController/event.controller.js";
import { upload } from "../../utils/multer/multer.js";

export const eventRouter = Router();

eventRouter.post(
  "/create-event",
  upload.single("image"),
  eventController.createEvent,
);
eventRouter.get("", eventController.getAllEvents);
eventRouter.get("/:id", eventController.getEventById);
eventRouter.put(
  "/update/:id",
  upload.single("image"),
  eventController.updateEvent,
);
eventRouter.delete("/delete/:id", eventController.deleteEvent);
