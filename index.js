import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config(); // ✅ Load .env file

const app = express();
app.use(express.json());
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

console.log("MONGO_URI from .env:", MONGO_URI); // 👀 Debug line

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err.message));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
