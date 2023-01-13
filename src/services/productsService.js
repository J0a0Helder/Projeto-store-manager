const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  const products = await productsModel.getById(id);
  return products;
};

const insertNew = async (name) => {
  const id = await productsModel.insertNew(name);
  return { id, name };
};

module.exports = {
  getAll,
  getById,
  insertNew,
};
