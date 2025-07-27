import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI = process.env?.MONGO_URI;

const dbConnect = async () => {
  if (!MONGO_URI) {
    console.error("Error: MONGO_URI is not defined in environment variables.");
    return;
  }
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
};

export default dbConnect;
