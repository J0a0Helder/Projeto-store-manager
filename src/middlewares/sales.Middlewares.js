const { schema } = require('./schemas');
const salesModel = require('../models/salesModel'); 

const inputsValidation = (req, res, next) => {
  const { body } = req;
  const errorArr = body.map((sales) => schema.validate(sales));
  if (errorArr.some((sale) => sale.error)) {
    const { error } = errorArr.find((sale) => sale.error);
    const { message } = error;
    if (message.includes('required')) return res.status(400).json({ message });
    if (message.includes('equal')) {
    return res
      .status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  }
  next();
};

const productIdValidation = async (req, res, next) => {
  const { body } = req;
  const idProductsSales = body.map((sale) => sale.productId);
  const idsFromDB = await salesModel.productsIds();
  const idProductsDB = idsFromDB.map((ids) => ids.id);
  const result = idProductsSales.every((ids) => idProductsDB.includes(ids));
  if (!result) return res.status(404).json({ message: 'Product not found' });
  next();
};

module.exports = { inputsValidation, productIdValidation };
