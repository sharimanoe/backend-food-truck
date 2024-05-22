const express = require("express");
const router = express.Router();

const Product = require("../models/Product.model.js");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

router.post("/products", (req, res) => {
  Product.create({
    image: req.body.image,
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    price: req.body.price,
    status: req.body.status,
    promotion: req.body.promotion,
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error });
    });
});

router.get("/products", isAuthenticated, (req, res) => {
  Product.find()
    .populate("products")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error });
    });
});

module.exports = router;
