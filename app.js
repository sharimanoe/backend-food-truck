require("dotenv").config();
require("./db");
const express = require("express");

const app = express();

// It runs most pieces of middleware
require("./config")(app);

// Routes
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

require("./error-handling")(app);

module.exports = app;
