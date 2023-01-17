const express = require('express');
const salesController = require('../controllers/salesController');
const {
  inputsValidation,
} = require('../middlewares/sales.Middlewares');

const salesRouter = express.Router();

salesRouter.post('/', inputsValidation, salesController.insertNew);
salesRouter.get('/', salesController.getAll);
salesRouter.get('/:id', salesController.getById);
salesRouter.delete('/:id', salesController.deleteS);
salesRouter.put('/:id', inputsValidation, salesController.edit);

module.exports = salesRouter;
