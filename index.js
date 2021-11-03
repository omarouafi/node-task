const express = require("express");
const dotenv = require("dotenv");
const productRouter = require("./Routes/product.router");
const path = require("path");
const viewsRouter = require("./Routes/views.router");
const sequelize = require("./db");
const orderRouter = require("./Routes/order.router");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/", viewsRouter);

sequelize.authenticate().then(() => {
  console.log("db connected");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Started At ${port}`);
});
