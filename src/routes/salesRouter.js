const express = require('express');
const salesController = require('../controllers/salesController');
const {
  inputsValidation,
  productIdValidation,
} = require('../middlewares/sales.Middlewares');

const salesRouter = express.Router();

salesRouter.post('/', inputsValidation, productIdValidation, salesController.insertNew);
salesRouter.get('/', salesController.getAll);
salesRouter.get('/:id', salesController.getById);

module.exports = salesRouter;
