const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getById(id);
  if (product.type) return res.status(404).json({ message: product.message });
  res.status(200).json(product);
};

const insertNew = async (req, res) => {
  const { name } = req.body;
  const newProduct = await productsService.insertNew(name);
  res.status(201).send(newProduct);
};

const edit = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const editedProduct = await productsService.edit(name, id);
  if (editedProduct.type) return res.status(404).json({ message: editedProduct.message });
  res.status(200).send(editedProduct);
};

const deleteP = async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await productsService.deleteP(id);
  if (deletedProduct.type) return res.status(404).json({ message: deletedProduct.message });
  res.status(204).send();
};

const search = async (req, res) => {
  const filters = Object.values(req.query)[0].toLowerCase();
  const product = await productsService.search(filters);
  return res.status(200).send(product);
};

module.exports = {
  getAll,
  getById,
  insertNew,
  edit,
  deleteP,
  search,
};