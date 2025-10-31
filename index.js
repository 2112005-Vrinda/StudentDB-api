import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// ✅ Root route — this is what you’ll see when you open the deployed URL
app.get("/", (req, res) => {
  res.send("🎉 Welcome to the Synergia Event Booking API!");
});

app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

console.log("MONGO_URI from .env:", MONGO_URI);

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err.message));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

