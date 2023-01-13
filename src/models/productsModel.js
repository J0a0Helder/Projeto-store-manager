const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products;';
  const [product] = await connection.execute(query);
  return product;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [[product]] = await connection.execute(query, [id]);
  return product;
};

module.exports = {
  getAll,
  getById,
};