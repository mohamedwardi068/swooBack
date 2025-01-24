const mongoose = require("mongoose");

// Define the product schema
const storySchema = new mongoose.Schema({
  name: { type: String, required: true }, // Product name
  discount: { type: Number, required: true }, // Discount percentage or amount
  price: { type: Number, required: true }, // Final price after discount
  originalPrice: { type: Number, required: true }, // Original price before discount
  image: { type: String, required: true }, // URL or path to the product image
  createdAt: { type: Date, default: Date.now }, // Auto-generated timestamp
});

// Create the Product model from the schema
module.exports = mongoose.model("story", storySchema);
