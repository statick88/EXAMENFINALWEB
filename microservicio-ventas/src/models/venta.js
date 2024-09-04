const db = require('../config/database');

const createCompra = async (clienteId, productos) => {
  // Insertar en la tabla Compras
  const [result] = await db.query('INSERT INTO Compras (ClienteID) VALUES (?)', [clienteId]);
  const compraId = result.insertId;

  // Insertar en la tabla DetalleCompra
  for (const producto of productos) {
    await db.query(
      'INSERT INTO DetalleCompra (CompraID, ProductoID, Cantidad, Precio) VALUES (?, ?, ?, ?)',
      [compraId, producto.productoId, producto.cantidad, producto.precio]
    );
  }

  return compraId;
};

const getCompraById = async (id) => {
  const [rows] = await db.query('SELECT * FROM Compras WHERE CompraID = ?', [id]);
  return rows[0];
};

const getComprasByCliente = async (clienteId) => {
  const [rows] = await db.query('SELECT * FROM Compras WHERE ClienteID = ?', [clienteId]);
  return rows;
};

module.exports = { createCompra, getCompraById, getComprasByCliente };
