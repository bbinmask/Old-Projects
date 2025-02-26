import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/auth.routes.js";
import { DB_NAME } from "./constants/index.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

// Database connection

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.warn("MongoDB database connected successfully");
  } catch (error) {
    console.error(error);
  }
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1", authRoute);
app.listen(port, () => {
  connectDB();
  console.warn("Server is running on: ", port);
});
