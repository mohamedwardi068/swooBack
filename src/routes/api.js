const express = require("express");
const productroot=require("./products/product-router")
const app = express();
const categorysroot=require("./category/category-router");
const userRouter = require("./user/user-router");
const api = express.Router();
app.use(express.json());
api.use('/category', categorysroot);
api.use('/product', productroot);
api.use('/users', userRouter);



module.exports = api;
