const express = require("express");
const storyrouter = express.Router();
const storyController = require("./story-Controller"); // Updated the controller path

// Fetch all stories/products
storyrouter.get("/", storyController.getProducts);

// Add a new story/product
storyrouter.post("/add", storyController.addProduct);

// Update a story/product by ID
storyrouter.put("/update/:id", storyController.updateProduct);  // Fixed missing "/"

// Delete a story/product by ID
storyrouter.delete("/remove/:id", storyController.removeProduct);  // Fixed missing "/"

module.exports = storyrouter;
