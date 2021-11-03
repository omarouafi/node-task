const Product = require("../Models/Product.model");

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      status: "success",
      product,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({
      status: "success",
      products,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ where: { id: req.params.id } });
    res.status(200).json({
      status: "success",
      product,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error,
    });
  }
};
