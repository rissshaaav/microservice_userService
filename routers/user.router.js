const express = require('express');
const userRouter = express.Router();

// Import the controller
const register = require("../controllers/register.controller");

userRouter.post("/register", register);

module.exports = userRouter;