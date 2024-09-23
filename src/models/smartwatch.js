const mongoose = require("mongoose");

const smartwatchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  
  specs: {
    display: { type: String },             // e.g., 1.4" OLED
    battery: { type: String },             // e.g., 300mAh
    sensors: { type: [String] },           // e.g., Heart Rate, GPS, SpO2
    waterResistance: { type: String },     // e.g., 5ATM
    connectivity: { type: String },        // e.g., Bluetooth, WiFi
    compatibility: { type: String },       // e.g., Android, iOS
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

// Create the Smartwatch model
module.exports = mongoose.model("Smartwatch", smartwatchSchema);
