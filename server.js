const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(cors());
app.use(express.json());

/* ---------- DATABASE ---------- */
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB Error:", err.message));
} else {
  console.warn("⚠️ MONGO_URI not found. Database not connected.");
}

/* ---------- ROUTES ---------- */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is running successfully 🚀"
  });
});

/* ---------- EXPORT APP ---------- */
// ❌ DO NOT use app.listen()
// ✅ Required for Vercel & serverless
module.exports = app;
