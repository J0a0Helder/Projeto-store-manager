const connection = require('./connection');

const insertNew = async (sales) => {
  const queryID = 'INSERT INTO StoreManager.sales (date) VALUES (CURRENT_TIMESTAMP());'; 
  const [{ insertId }] = await connection.execute(queryID); // obg a mari na monitoria que me ajudou :D
  const values = sales.map((sale) => [insertId, Number(sale.productId), Number(sale.quantity)]);
  const query = 'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES ?';
  await connection.query(
  query,
  [values],
  );
  return insertId;
};

const productsIds = async () => {
  const query = 'SELECT id FROM StoreManager.products;';
  const [id] = await connection.execute(query);
  return id;
};

const getAll = async () => {
  const query = (`SELECT sale_id AS saleId, date, product_id AS productId, quantity
  FROM StoreManager.sales_products AS products 
  INNER JOIN StoreManager.sales AS sales ON products.sale_id = sales.id;`);
  const [sales] = await connection.execute(query);
  return sales;
};

const getById = async (id) => {
  const query = `SELECT date, product_id AS productId, quantity 
  FROM StoreManager.sales_products AS p
  INNER JOIN StoreManager.sales AS s ON p.sale_id=s.id WHERE p.sale_id=${id}`;
  const [sale] = await connection.execute(query);
  return sale;
};

const deleteP = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?;';
  const [deletedsale] = await connection.execute(query, [id]);
  return deletedsale.affectedRows;
};

module.exports = {
  insertNew,
  productsIds,
  getAll,
  getById,
  deleteP,
};
