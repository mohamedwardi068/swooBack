const productSchema = require("../../models/product"); // Import the Product schema
const mongoose = require("mongoose");

// Fetch all products
exports.getProducts = async (req, res) => {
  try {
    const products = await productSchema.find(); // Fetch all products from the database
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

// Remove a product by ID
exports.removeProduct = async (req, res) => {
  try {
    const { id } = req.params; // Get the product ID from request parameters

    // Validate if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: 'Invalid ID format' });
    }

    // Find and delete the product by ID
    const product = await productSchema.findByIdAndDelete(id);
    
    if (product) {
      res.status(200).json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // Get the product ID from request parameters
    const updatedData = req.body; // Get the updated product data from the request body

    console.log("Product ID:", id);

    for (const [key, value] of Object.entries(updatedData)) {
      console.log(`${key}: ${value}`);
    }

    // Find and update the product by ID with new data
    const updatedProduct = await productSchema.findByIdAndUpdate(id, updatedData, {
      new: true, // Return the updated product
    });

    if (updatedProduct) {
      res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
  try {
    const { name, specs, price, originalPrice, discount, shipping, availability, image, categoryId } = req.body;
    
    // Ensure required fields are provided
    if (!name || !price || !categoryId) {
      return res.status(400).json({ message: "Name, price, and category ID are required" });
    }
    
    console.log("Received data:", { name, specs, price, originalPrice, discount, shipping, availability, image, categoryId });

    // Create a new product
    const newProduct = new productSchema({
      name,
      specs,
      price,
      originalPrice,
      discount,
      shipping,
      availability,
      image,
      category: categoryId, // Reference the category by its ID
      createdAt: Date.now(),
    });

    // Save the new product to the database
    const savedProduct = await newProduct.save();
    res.status(200).json({ message: "Product added successfully", product: savedProduct });
  } catch (error) {
    console.error("Error adding product:", error); // Detailed error logging
    res.status(500).json({ message: "Error adding product", error: error.message }); // Send the error message to the client
  }
};
