import mongoose from "mongoose";
const { Schema, model } = mongoose;
const CohortsSchema = new Schema(
  {
    inProgress: { type: Boolean, default: false },
    cohortSlug: { type: String, required: true, unique: true },
    cohortName: { type: String, required: true, unique: true },
    program: {
      type: String,
      required: true,
      enum: ["UX/UI", "Data Analytics", "Cybersecurity", "Web Dev"],
    },
    format: {
      type: String,
      required: true,
      enum: ["Part Time", "Data Full Time"],
    },
    campus: {
      type: String,
      required: true,
      enum: [
        "Madrid",
        "Barcelona",
        "Miami",
        "Paris",
        "Berlin",
        "Amsterdam",
        "Lisbon",
        "Remote",
      ],
    },
    startDate: { type: String, default: new Date() },
    endDate: { type: String },
    programManager: { type: String, required: true, unique: true },
    leadTeacher: { type: String, required: true, unique: true },
    totalHours: { type: Number, required: true, default: 360 },
  },
  {
    timestamps: true,
  },
);

export default model("cohort", CohortsSchema);
