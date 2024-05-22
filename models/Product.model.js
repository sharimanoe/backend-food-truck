const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    type: {
      type: String,
      enum: ["Food", "Drink", "Dessert"],
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["Created", "Finished"],
      required: true,
    },
    promotion: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
