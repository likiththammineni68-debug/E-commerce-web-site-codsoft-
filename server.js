const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// serve images (if using local assets)
app.use("/assets", express.static("assets"));

// routes
app.use("/products", require("./routes/products"));

app.get("/", (req, res) => {
  res.json({ message: "Backend running" });
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch(err => {
    console.error("MongoDB connection error:", err.message);
  });
