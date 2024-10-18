require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/index");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);
connectDB();

module.exports = app;
 