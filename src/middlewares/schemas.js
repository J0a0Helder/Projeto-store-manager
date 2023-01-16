const Joi = require('joi');

const schema = Joi.object({
  productId: Joi.number().min(1).required(),
  quantity: Joi.number().min(1).required(),
});

module.exports = { schema };
