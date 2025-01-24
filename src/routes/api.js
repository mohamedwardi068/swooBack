const express = require("express");
const productroot = require("./products/product-router"); // Correct path to product router
const categorysroot = require("./category/category-router");
const userRouter = require("./user/user-router");
const storyrouter = require("./story/story-router");
const api = express.Router();



// Set up routes
api.use('/category', categorysroot);
api.use('/product', productroot);
api.use('/users', userRouter);
api.use('/story', storyrouter);

module.exports = api;
