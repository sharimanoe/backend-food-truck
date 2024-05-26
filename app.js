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

const productRoutes = require("./routes/product.routes");
app.use("/api", productRoutes);

const orderRoutes = require("./routes/order.routes");
app.use("/api", orderRoutes);

require("./error-handling")(app);

module.exports = app;
