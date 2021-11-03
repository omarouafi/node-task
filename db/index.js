const Sequelize = require("sequelize");
const dotnev = require("dotenv");
dotnev.config({ path: "./.env" });
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    operatorAliases: false,
  }
);

module.exports = sequelize;
