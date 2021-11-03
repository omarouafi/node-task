const dotenv = require("dotenv");
const Order = require("../Models/order.model");
dotenv.config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET);
const Product = require("../Models/Product.model");

exports.getCheckoutSession = async (req, res, next) => {
  const product = await Product.findOne({ where: { id: req.params.id } });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    success_url: `${req.protocol}://${req.get("host")}/thanks/?product=${
      req.params.id
    }&price=${product.price}`,
    cancel_url: `${req.protocol}://${req.get("host")}/${product.id}`,
    customer_email: "omarouafi12@gmail.com",
    client_reference_id: req.params.id,
    line_items: [
      {
        name: `${product.title}`,
        description: product.description,
        images: [`/${product.image}`],
        amount: product.price * 100,
        currency: "usd",
        quantity: 1,
      },
    ],
  });

  res.status(200).json({
    status: "success",
    session,
  });
};

exports.createOrder = async (req, res, next) => {
  const { product, price } = req.query;
  if (!product || !price) return next();
  await Order.create({ productId: product, total: price, status: "paid" });
  res.redirect(req.originalUrl.split("?")[0]);
};

exports.getAllOrders = async (req, res, next) => {
  const orders = await Order.findAll();
  res.status(200).json({
    status: "success",
    orders,
  });
};
