const express = require("express");
const body_parser = require("body-parser");
const {
  getAllProducts,
  addProduct,
  updateProduct,
  getAllCarts,
  deleteProduct,
} = require("./products_db");
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
app.get("/cart", async (req, res) => {
  const cart = await getAllCarts();
  let cartList = [];
  for await (let st of cart) {
    // console.log(st)
    cartList.push(st);
  }
  res.send(cartList);
});
app.post("/cart", async (req, res) => {
  const data = req.body;
  const response = await addProduct(data);
  res.status(201).send(response);
});
app.put("/cart/:id", async (req, res) => {
  const data = req.body;
  const result = await updateProduct(req.params.id, data);
  res.status(201);
  res.send(result);
});
app.delete("/cart/:id", async (req, res) => {
  const result = await deleteProduct(req.params.id);
  if (result.deletedCount === 0) {
    res.send({ msg: "Product not in cart" });
  } else {
    res.send({ msg: "deleted", obj: result });
  }
});

app.get("*", (req, res) => {
  res.status(404).send({ msg: "usrl Not found" });
});

app.listen(8080);
