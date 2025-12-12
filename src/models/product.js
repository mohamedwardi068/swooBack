const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specs: { type: String },
  price: { type: Number },


  priceRange: {
    min: { type: Number },
    max: { type: Number },
  },


  originalPrice: { type: Number },
  discount: { type: Number },

  shipping: { type: String },
  availability: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },

  // Link to a category collection
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  sales: { type: Number, default: 0 },
});

// Create the Product model from the schema
module.exports = mongoose.model("Product", productSchema);
