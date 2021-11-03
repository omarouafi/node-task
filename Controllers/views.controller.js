const Order = require("../Models/order.model");
const Product = require("../Models/Product.model");

exports.renderHome = async (req, res) => {
  const products = await Product.findAll();
  res.status(200).render("index", { products });
};

exports.renderProductDetail = async (req, res) => {
  const product = await Product.findOne({ where: { id: req.params.id } });
  res.status(200).render("product-detail", { product });
};

exports.renderOrders = async (req, res) => {
  const orders = await Order.findAll();
  res.status(200).render("orders", { orders });
};

exports.renderThanks = async (req, res) => {
  res.status(200).render("thank");
};
