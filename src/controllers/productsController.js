const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getById(id);
  res.status(200).json(product);
};

const insertNew = async (req, res) => {
  const { name } = req.body;
  const newProduct = await productsService.insertNew(name);
  res.status(201).send(newProduct);
};

module.exports = {
  getAll,
  getById,
  insertNew,
};