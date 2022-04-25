const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      default: 1
    },
    price: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
