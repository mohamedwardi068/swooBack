const express = require("express");


const productsRouter = express.Router(); // Change router name to productsRouter
const productsController = require("./product-Controller"); // Updated path to the product controller

// Routes for handling products
productsRouter.get("/", productsController.getProducts); // Fetch all products
productsRouter.delete("/remove/:id", productsController.removeProduct); // Remove a product by ID
productsRouter.put("/update/:id", productsController.updateProduct);  // Update a product by ID
productsRouter.post("/addProduct", productsController.addProduct); // Add a new product

module.exports = productsRouter;
