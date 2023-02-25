const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderItemSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    default: 0,
  },
  unit_price: {
    type: Number,
    default: 0,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  orderItems: [orderItemSchema],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
