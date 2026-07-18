import mongoose from "mongoose";
const { Schema, model } = mongoose;
const StudentsSchema = new Schema(
  {
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    linkedinUrl: { type: String, required: true, unique: true },
    languages: {
      type: String,
      required: true,
      enum: [
        "English",
        "Spanish",
        "French",
        "German",
        "Portuguese",
        "Dutch",
        "Other",
      ],
    },
    program: {
      type: String,
      required: true,
      enum: ["UX/UI", "Data Analytics", "Cybersecurity", "Web Dev"],
    },
    background: { type: String, required: true, default: "" },
    image: {
      type: String,
      required: true,
      default: "https://i.imgur.com/r8bo8u7.png ",
    },
    // cohort: {
    //   // type: {Schema.Type.ObjectId, "cohorts"},
    //   required: true,
    // },
    projects: {
      type: [],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model("student", StudentsSchema);
