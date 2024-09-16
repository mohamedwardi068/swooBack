const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specs: { type: String },
  
  // For products with a price range
  priceRange: {
    min: { type: Number },
    max: { type: Number },
  },

  // Original price is still present for discount purposes
  originalPrice: { type: Number },
  discount: { type: Number },
  
  shipping: { type: String },
  availability: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },

  // Link to a category collection
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }, 
});

// Create the Product model from the schema
module.exports = mongoose.model("Product", productSchema);
