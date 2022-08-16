// const { ObjectId } = require("mongodb");
const { ObjectId } = require("mongodb");
const { getCollection } = require("./dbcon");

const addProduct = async (object) => {
  const cart = await getCollection("cart");
  return await cart.insertOne(object);
};

const updateProduct = async (id, object) => {
  const cart = await getCollection("cart");
  return await cart.findOneAndUpdate({ _id: ObjectId(id) }, { $set: object });
};

const deleteProduct = async (id) => {
  const cart = await getCollection("cart");
  return await cart.deleteOne({ _id: ObjectId(id) });
};

const getAllProducts = async (object) => {
  const products = await getCollection("products");
  const product = await products.find(object);
  return product;
};
const getAllCarts = async () => {
  const cart = await getCollection("cart");
  const items = await cart.find();
  return items;
};

module.exports = {
  getAllProducts,
  deleteProduct,
  addProduct,
  updateProduct,
  getAllCarts,
};
