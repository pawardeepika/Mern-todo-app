const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // Import the database connection function
const taskRoutes = require("./routes/taskRoutes"); // Import task routes

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware to handle CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Route to handle task-related API endpoints
app.use("/api", taskRoutes);

// Start the server and listen on the defined port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
