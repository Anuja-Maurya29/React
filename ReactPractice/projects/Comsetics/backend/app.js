import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'

// import { router } from './src/router/router.js';
import dbConnection from "./src/database/dbConnection.js";
import cors from "cors";
import authRouter from "./src/Routes/authRoutes.js";
import productRouter from "./src/Routes/productRoutes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;
dbConnection();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/auth/", authRouter);
app.use("/api",productRouter)

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
