const mongoose = require("mongoose");

const flowerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Flower name is required"],
      minLength: [3, "Flower name must contain at least 3 characters"],
    },
    description: {
      type: String,
      maxLength: [255, "Flower description must contain a maximum of 255 characters"]
    },
    price: {
      type: Number,
      required: [true, "Flower price is required"],
      min: [1, "Flower minimum price is 1"]
    },
    image: {
      type: String,
      default: "https://unsplash.com/es/fotos/62saZ_T5AP0",
    },
  });

  const Flower = mongoose.model("Flower", flowerSchema);

module.exports = Flower;