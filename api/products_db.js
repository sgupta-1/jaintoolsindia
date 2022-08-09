// const { ObjectId } = require("mongodb");
const { getCollection } = require("./dbcon");

// const addProduct = async (object) => {
//   const heros = await getCollection("heros");
//   return await heros.insertOne(object);
// };

// const updateHero = async (id, object) => {
//   const heros = await getCollection("heros");
//   return await heros.findOneAndUpdate({ _id: ObjectId(id) }, { $set: object });
// };

// const deleteHero = async (id) => {
//   const heros = await getCollection("heros");
//   return await heros.deleteOne({ _id: ObjectId(id) });
// };

const getAllProducts = async (object) => {
  const products = await getCollection("products");
  const product = await products.find(object);
  return product;
};

module.exports = {
  getAllProducts,
};
