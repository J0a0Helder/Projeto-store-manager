const productsModel = require('../models/productsModel');

const idValidation = async (req, res, next) => {
  const { id } = req.params;
  const product = await productsModel.getById(id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = { idValidation };
