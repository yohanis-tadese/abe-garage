// Import the express module
const express = require("express");
// Call the router method from express to create the router
const router = express.Router();
// Import the employee controller
const loginController = require("../controllers/login.controller");
// Create a route to handle the add employee request on post
router.post("/api/employee/login", loginController.logIn);
// Export the router
module.exports = router;
