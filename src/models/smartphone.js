const mongoose = require("mongoose");

const smartphoneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  
  specs: {
    display: { type: String },          // e.g., 6.5" AMOLED
    processor: { type: String },        // e.g., Snapdragon 888
    ram: { type: String },              // e.g., 8GB
    storage: { type: String },          // e.g., 128GB
    camera: {
      front: { type: String },          // e.g., 20 MP
      rear: { type: String },           // e.g., 108 MP
    },
    battery: { type: String },          // e.g., 4500mAh
    os: { type: String },               // e.g., Android 12
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

// Create the Smartphone model from the schema
module.exports = mongoose.model("Smartphone", smartphoneSchema);
