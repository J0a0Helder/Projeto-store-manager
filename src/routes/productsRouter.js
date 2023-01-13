const express = require('express');
const productsController = require('../controllers/productsController');
const { idValidation } = require('../middlewares/productsMiddlewares');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAll);
productsRouter.get('/:id', idValidation, productsController.getById);
// productsRouter.post('/', productsController.insertNew);

module.exports = productsRouter;
