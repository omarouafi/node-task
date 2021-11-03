const express = require("express");
const {
  getAllProducts,
  getProduct,
  createProduct,
} = require("../Controllers/product.controller");

const productRouter = express.Router();

productRouter.route("/").get(getAllProducts).post(createProduct);
productRouter.route("/:id").get(getProduct);

module.exports = productRouter;
