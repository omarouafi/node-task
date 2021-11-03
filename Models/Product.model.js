const Sequelize = require("sequelize");
const sequelize = require("../db");

const Product = sequelize.define("Product", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: Sequelize.STRING(64),
  description: Sequelize.STRING(500),
  image: Sequelize.STRING,
  price: Sequelize.FLOAT,
});

module.exports = Product;
