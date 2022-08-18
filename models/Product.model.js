const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Product name is required"],
      minLength: [3, "Product name must contain at least 3 characters"],
    },
    description: {
      type: String,
      maxLength: [255, "Product description must contain a maximum of 255 characters"]
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [1, "Product minimum price is 1"]
    },
    image: {
      type: String,
      default: "https://unsplash.com/es/fotos/62saZ_T5AP0",
    },
  });

  const Product = mongoose.model("Product", productSchema);

module.exports = Product;