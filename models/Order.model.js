const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required."],
    },
    products: {
      type: [
        {
          productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: [true, "Product ID is required."],
          },
          quantity: {
            type: Number,
            required: [true, "Quantity is required."],
          },
          price: {
            type: Number,
            required: [true, "Price is required."],
          },
        },
      ],
      required: [true, "The list of products is required."],
    },
    orderTotal: {
      type: Number,
      default: 0,
      required: [true, "Order total is required."],
    },
    status: {
      type: String,
      enum: ["Created", "Finished"],
      default: "Created",
      required: [true, "Status is required."],
    },
  },
  {
    timestamps: true,
  }
);

const Order = model("Order", orderSchema);

module.exports = Order;
