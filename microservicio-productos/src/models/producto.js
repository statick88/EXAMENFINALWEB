const db = require('../config/database');

const getProductos = async () => {
  const [rows] = await db.query('SELECT * FROM Productos');
  return rows;
};

const getProductoById = async (id) => {
  const [rows] = await db.query('SELECT * FROM Productos WHERE producto_id = ?', [id]);
  return rows[0];
};

const createProducto = async (nombre, precio, stock) => {
  const [result] = await db.query(
    'INSERT INTO Productos (nombre, precio, stock) VALUES (?, ?, ?)',
    [nombre, precio, stock]
  );
  return result.insertId;
};

const updateProducto = async (id, nombre, precio, stock) => {
  await db.query(
    'UPDATE Productos SET nombre = ?, precio = ?, stock = ? WHERE producto_id = ?',
    [nombre, precio, stock, id]
  );
};

const deleteProducto = async (id) => {
  await db.query('DELETE FROM Productos WHERE producto_id = ?', [id]);
};

module.exports = { getProductos, getProductoById, createProducto, updateProducto, deleteProducto };
