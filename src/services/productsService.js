const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  const product = await productsModel.getById(id);
  if (!product) {
    return { type: 'INVALID_ID', message: 'Product not found' };
  }
  return product;
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
