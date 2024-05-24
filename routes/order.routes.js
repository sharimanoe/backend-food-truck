const express = require("express");
const router = express.Router();
const Order = require("../models/Order.model.js");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

router.post("/orders", (req, res) => {
  const { userId, products, orderTotal, status } = req.body;

  if (!userId || !products || products.length === 0 || !orderTotal || !status) {
    return res.status(400).json({ error: "All fields are required." });
  }

  Order.create({ userId, products, orderTotal, status })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal server error." });
    });
});

router.get("/orders", (req, res) => {
  Order.find()
    // .populate("userId")
    // .populate("products.productId")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal server error." });
    });
});

router.get("/orders/:id", (req, res) => {
  Order.findById(req.params.id)
    // .populate("userId")
    // .populate("products.productId")
    .then((response) => {
      if (!response) {
        return res.status(404).json({ error: "Order not found." });
      }
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal server error." });
    });
});

module.exports = router;
