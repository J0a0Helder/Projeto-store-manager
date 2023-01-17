const { schema } = require('./schemas');

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

module.exports = { inputsValidation };
