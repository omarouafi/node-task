const express = require("express");
const { createOrder } = require("../Controllers/order.controller");
const {
  renderHome,
  renderProductDetail,
  renderOrders,
  renderThanks,
} = require("../Controllers/views.controller");

const viewsRouter = express.Router();

viewsRouter.route("/").get(renderHome);
viewsRouter.route("/orders").get(renderOrders);
viewsRouter.route("/thanks").get(createOrder, renderThanks);
viewsRouter.route("/:id").get(renderProductDetail);

module.exports = viewsRouter;
