const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const getDb = () => {
  const client = new MongoClient(url);
  const db = client.db("ProductsDB");
  console.log("databse connected");
  return db;
};

const getCollection = async (conllName) => {
  const db = await getDb();
  const products = await db.collection(conllName);
  return products;
};
// const getAllProducts = async () => {
//   const collName = await getCollection("products");
//   const products = await collName.find();
//   return products;
// };

// const disProducts = async () => {
//   const pro = await getAllProducts();
//   for await (let i of pro) {
//     console.log(i);
//   }
// };
// disProducts();
module.exports = {
  getCollection,
};
