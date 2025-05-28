const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(8800, () => {
      console.log("Server is running on port 8800!!");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
