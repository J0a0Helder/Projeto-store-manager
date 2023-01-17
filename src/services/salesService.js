const salesModel = require('../models/salesModel');

const insertNew = async (itemsSold) => {
  const idProductsSales = itemsSold.map((sale) => sale.productId);
  const idsFromDB = await salesModel.productsIds();
  const idProductsDB = idsFromDB.map((ids) => ids.id);
  const result = idProductsSales.every((ids) => idProductsDB.includes(ids));
  if (!result) return ({ type: 'INVALID_ID', message: 'Product not found' }); 
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

const deleteS = async (id) => {
  const deletedSale = await salesModel.deleteP(id);
  if (deletedSale === 0) {
    return { type: 'INVALID_ID', message: 'Sale not found' };
  }
  return deletedSale;
};

module.exports = {
  insertNew,
  getAll,
  getById,
  deleteS,
};
