const express = require("express");
const {
  getCheckoutSession,
  getAllOrders,
} = require("../Controllers/order.controller");

const orderRouter = express.Router();

orderRouter.route("/").get(getAllOrders);
orderRouter.route("/checkout/:id").get(getCheckoutSession);

module.exports = orderRouter;
