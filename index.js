import express from "express";
import dotenv from "dotenv";
import dbConnect from "./src/config/dbConnection.js";
import router from "./src/routes/index.js";

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4002;

app.use(router);

dbConnect();
app.listen(PORT, (req, res) => {
  console.log(`Connected to Port: ${PORT}`);
});
