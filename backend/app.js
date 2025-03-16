// index.js
require("dotenv").config(); // Load environment variables first
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware
const authRoutes = require("./routes/auth");
const inventoryRoutes = require("./routes/inventory");
const connectDB = require("./db"); // Import the database connection

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/inventory", inventoryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
