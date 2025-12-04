import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    problem: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
      set: (value) => {
        // Normalize difficulty to capitalized form (Easy, Medium, Hard)
        if (!value) return value;
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      },
    },
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    status: {
      type: String,
      enum: ["active", "completed"],
      default: "active",
    },
    callId: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Session = mongoose.model("Session", sessionSchema);
export default Session;
