import mongoose, { model, Schema } from "mongoose";

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  eventId: {
    type: mongoose.Types.ObjectId,
    ref: Event,
  },
  icon: {
    type: String,
    required: true,
  },
});

export const categoryModel = mongoose.model("Category", categorySchema)