// Import the module
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sanitize = require("sanitize");
const router = require("./routes/index");

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};

// Add the CORS middleware
app.use(cors(corsOptions));

// Add the express.json middleware to the application
app.use(express.json());
// Add the sanitizer to the express middleware
app.use(sanitize.middleware);
app.use(router);

// Create a variable to hold our port number
const port = process.env.PORT;

// Start the webserver
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
// Export the webserver for use in the application
module.exports = app;
