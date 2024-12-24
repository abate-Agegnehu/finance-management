const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const routes = require("./routes/routes");

dotenv.config();

// Connect to the database
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Use routes
app.use("/api", routes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
