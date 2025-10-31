import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  event: {
    type: String,
    required: true
  },
  ticketType: {
    type: String,
    enum: ["Regular", "VIP", "Student"],
    default: "Regular"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// ✅ Correct model export
const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
