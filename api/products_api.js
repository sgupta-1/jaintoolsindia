const express = require("express");
const body_parser = require("body-parser");
const { getAllProducts } = require("./products_db");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

const PORT = process.env.PORT || 8080;

app.get("/products", async (req, res) => {
  let filter;
  if (req.query.categories) {
    filter = { category: req.query.categories };
  }
  const products = await getAllProducts(filter);
  let productList = [];
  for await (let pt of products) {
    productList.push(pt);
  }
  res.send(productList);
});

app.get("*", (req, res) => {
  res.status(404).send({ msg: "usrl Not found" });
});

app.listen(8080);
