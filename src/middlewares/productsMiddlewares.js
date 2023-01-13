const productsModel = require('../models/productsModel');

const idValidation = async (req, res, next) => {
  const { id } = req.params;
  const product = await productsModel.getById(id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

const nameValidation = (req, res, next) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res
      .status(422)
      .json({
        message: '"name" length must be at least 5 characters long',
      });
    }
  next();
};

module.exports = { idValidation, nameValidation };
