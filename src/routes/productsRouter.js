const express = require('express');
const productsController = require('../controllers/productsController');
const {
  idValidation,
  nameValidation,
} = require('../middlewares/productsMiddlewares');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAll);
productsRouter.get('/:id', idValidation, productsController.getById);
productsRouter.post('/', nameValidation, productsController.insertNew);

module.exports = productsRouter;
