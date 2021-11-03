const Sequelize = require("sequelize");
const sequelize = require("../db");

const Order = sequelize.define("Order", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  productId: Sequelize.INTEGER,
  total: Sequelize.FLOAT,
  stripe_id: Sequelize.STRING,
  status: Sequelize.STRING(10),
});

module.exports = Order;
