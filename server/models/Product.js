const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  productID: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  stock: {
    type: Number,
    min: 0,
    default: 0,
  },
  material: {
    type: String,
  },
  size: {
    type: String,
  },
  gemstone: {
    type: String,
  },
  imageID: {
    type: Number,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
