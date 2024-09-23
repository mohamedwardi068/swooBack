const mongoose = require("mongoose");

const tabletSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  
  specs: {
    display: { type: String },             // e.g., 10.5" LCD
    processor: { type: String },           // e.g., A12 Bionic
    ram: { type: String },                 // e.g., 4GB
    storage: { type: String },             // e.g., 64GB
    camera: {
      front: { type: String },             // e.g., 8 MP
      rear: { type: String },              // e.g., 12 MP
    },
    battery: { type: String },             // e.g., 7000mAh
    os: { type: String },                  // e.g., iPadOS, Android
    connectivity: { type: String },        // e.g., WiFi, LTE
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

// Create the Tablet model
module.exports = mongoose.model("Tablet", tabletSchema);
