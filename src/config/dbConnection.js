import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const MONGO_URI = process.env?.MONGO_URI ;
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  }
};

export default dbConnect;
