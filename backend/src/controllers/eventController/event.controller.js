import { asyncHandler } from "../../utils/asyncHandler.js";
import {
  createEventService,
  getAllEventsService,
  getEventByIdService,
  updateEventService,
  deleteEventService,
} from "../../services/EventService/event.service.js";

export const createEvent = asyncHandler(async (req, res) => {
  const { title, description, date, location, capacity } = req.body;
  if (!title || !description || !date || !location || !capacity) {
    res.status(400);
    throw new Error("title, description, date, and location are required", {
      cause: 400,
    });
  }

  if (!req.file) {
    res.status(400);
    throw new Error("Image is required");
  }

  const event = await createEventService({
    title,
    description,
    date,
    location,
    image: req.file.filename,
    capacity,
  });

  res.status(201).json({
    success: true,
    message: "Event created successfully",
    data: event,
  });
});

export const getAllEvents = asyncHandler(async (req, res) => {
  const events = await getAllEventsService();

  res.status(200).json({
    success: true,
    message: "Events fetched successfully",
    data: events,
  });
});

export const getEventById = asyncHandler(async (req, res) => {
  const event = await getEventByIdService(req.params.id);

  res.status(200).json({
    success: true,
    message: "Event fetched successfully",
    data: event,
  });
});

export const updateEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (req.file) {
    req.body.image = req.file.filename;
  }
  const event = await updateEventService(id, req.body);

  res.status(200).json({
    success: true,
    message: "Event updated successfully",
    data: event,
  });
});

export const deleteEvent = asyncHandler(async (req, res) => {
  await deleteEventService(req.params.id);

  res.status(200).json({
    message: "Event is Deleted Successfully",
  });
});
