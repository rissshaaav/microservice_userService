require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// Create an express app
const app = express();

// Parse incoming JSON data
app.use(express.json());

// Parse incoming cookies
app.use(cookieParser());

// Import the routers
const userRouter = require("./routers/user.router");

// Routes
app.use("/users", userRouter);


// Server & Database Connection
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
    console.log("Connecting to MongoDB....");
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected");
        })
        .catch((err) => {
            console.log("Error connecting to MongoDB");
            console.log(err);
        });
});
