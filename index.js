require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

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
