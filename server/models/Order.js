const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderItem = new mongose.Schema({
  quantity: Number,
  unit_price: Double,
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
  orderItems: [orderItem],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
