const salesModel = require('../models/salesModel');

const insertNew = async (itemsSold) => {
  const id = await salesModel.insertNew(itemsSold);
  return { id, itemsSold };
};

const getAll = async () => {
  const sales = await salesModel.getAll();
  return sales;
};

const getById = async (id) => {
  const sale = await salesModel.getById(id);
  if (sale.length === 0) {
    return ({ type: 'INVALID_ID', message: 'Sale not found' });
  }
  return sale;
};

module.exports = {
  insertNew,
  getAll,
  getById,
};
