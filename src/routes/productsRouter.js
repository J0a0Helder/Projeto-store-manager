const express = require('express');
const productsController = require('../controllers/productsController');
const {
  nameValidation,
} = require('../middlewares/productsMiddlewares');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAll);
productsRouter.get('/:id', productsController.getById);
productsRouter.put('/:id', nameValidation, productsController.edit);
productsRouter.post('/', nameValidation, productsController.insertNew);

module.exports = productsRouter;
