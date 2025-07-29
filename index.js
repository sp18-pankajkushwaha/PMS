import dotenv from "dotenv";
dotenv.config();
import express from "express";
import dbConnect from "./src/config/dbConnection.js";
import router from "./src/routes/index.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4002;

app.use(router);

dbConnect();
app.listen(PORT, (req, res) => {
  console.log(`Connected to Port: ${PORT}`);
});
