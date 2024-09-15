const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specs: { type: String },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  discount: { type: Number },
  shipping: { type: String },
  availability: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },


  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }, 
});

module.exports = mongoose.model("Product", productSchema);
