import mongoose from "mongoose";

export default async function connectDB() {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URL);

    console.log("Connected to db", connection.connections[0].name);
  } catch (error) {
    console.log(error);
  }
}
