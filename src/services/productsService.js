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

const edit = async (name, id) => {
  const editedProduct = await productsModel.edit(name, id);
  if (editedProduct === 0) {
    return { type: 'INVALID_ID', message: 'Product not found' };
  }
  return { id, name };
};

const deleteP = async (id) => {
  const deletedProduct = await productsModel.deleteP(id);
  if (deletedProduct === 0) {
    return { type: 'INVALID_ID', message: 'Product not found' };
  }
  return deletedProduct;
};

const search = async (filters) => {
  const allProducts = await productsModel.getAll();
  if (filters === '') return allProducts;
  const productsFiltred = await productsModel.search(filters);
  return productsFiltred;
};

module.exports = {
  getAll,
  getById,
  insertNew,
  edit,
  deleteP,
  search,
};
