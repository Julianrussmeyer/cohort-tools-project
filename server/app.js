import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db/mongoose.connect.js";
import "dotenv/config";

const PORT = 5005;

//  DATA
// Devs Team - Import the provided files with JSON data of students and cohorts here:
// import cohorts from "./cohorts.json";
// import students from "./students.json";
import studentsModel from "./models/students.model.js";
import cohortsModel from "./models/cohorts.model.js";
// INITIALIZE EXPRESS APP - https://expressjs.com/en/4x/api.html#express
const app = express();

// MIDDLEWARE
// Research Team - Set up CORS middleware here:
app.use(cors());
// ...
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ROUTES - https://expressjs.com/en/starter/basic-routing.html
// Devs Team - Start working on the routes here:
// ...
app.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/views/docs.html");
});

app.get("/api/cohorts", async (req, res) => {
  // res.json(cohorts);
  const cohorts = await cohortsModel.find();
  console.log(cohorts);
  res.status(200).json(cohorts);
});

app.get("/api/students", async (req, res) => {
  // res.json(students);
  const students = await studentsModel.find();
  console.log(students);
  res.status(200).json(students);
});

// START SERVER
// app.js
app.listen(PORT, () => {
  console.clear();
  connectDB();
  console.log(`Server listening on port ${PORT}`);
});
