const salesService = require('../services/salesService');

const insertNew = async (req, res) => {
  const newSale = await salesService.insertNew(req.body);
  if (newSale.type) return res.status(404).json({ message: newSale.message });
  res.status(201).send(newSale);
};

const getAll = async (_req, res) => {
  const sales = await salesService.getAll();
  res.status(200).json(sales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getById(id);
  if (sale.type) return res.status(404).json({ message: sale.message });
  res.status(200).json(sale);
};

const deleteS = async (req, res) => {
  const { id } = req.params;
  const deletedSale = await salesService.deleteS(id);
  if (deletedSale.type) {
    return res.status(404).json({ message: deletedSale.message });
  }
  res.status(204).send();
};

const edit = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const editedSale = await salesService.edit(body, id);
  if (editedSale.type) return res.status(404).json({ message: editedSale.message });
  res.status(200).send(editedSale);
};

module.exports = {
  insertNew,
  getAll,
  getById,
  deleteS,
  edit,
};
