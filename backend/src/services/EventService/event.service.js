import mongoose from "mongoose";
import { Event } from "../../models/event.model.js";

export async function createEventService(payload) {
  const eventExist = await Event.findOne({
    title: payload.title,
  });
  if (eventExist) {
    throw new Error("Event title is Already Exist", {
      cause: 400,
    });
  }
  return await Event.create(payload);
}

export async function getAllEventsService() {
  return Event.find().sort({ createdAt: -1 });
}

export async function getEventByIdService(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid event id", { cause: 400 });
  }

  const event = await Event.findById(id);
  if (!event) {
    throw new Error("Event not found", { cause: 404 });
  }

  return event;
}

export async function updateEventService(id, payload) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid Event Id", { cause: 400 });
  }
  const event = await Event.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!event) {
    throw new Error("Event not found", { cause: 404 });
  }

  return event;
}

export async function deleteEventService(id) {
  const event = await getEventByIdService(id);
  await event.deleteOne();
  return true;
}
