const mongoose = require("mongoose");

const chargerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  
  specs: {
    powerOutput: { type: String },         // e.g., 20W, 65W
    type: { type: String },                // e.g., USB-C, USB-A
    compatibility: { type: [String] },     // e.g., iPhone, Android, Laptop
    cableIncluded: { type: Boolean },      // true or false
    wireless: { type: Boolean },           // true or false
  },

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
});

// Create the Charger model
module.exports = mongoose.model("Charger", chargerSchema);
