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

const insertNew = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?);';
  const [newProduct] = await connection.execute(query, [name]);
  return newProduct.insertId;
};

const edit = async (name, id) => {
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?;';
  const [editedProduct] = await connection.execute(query, [name, id]);
  return editedProduct.changedRows;
};

const deleteP = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?;';
  const [deletedProduct] = await connection.execute(query, [id]);
  return deletedProduct.affectedRows;
};

const search = async (filter) => {
  const query = `SELECT * FROM StoreManager.products WHERE name LIKE '%${filter}%';`;
  const [productsFiltred] = await connection.execute(query);
  return productsFiltred;
};

module.exports = {
  getAll,
  getById,
  insertNew,
  edit,
  deleteP,
  search,
};