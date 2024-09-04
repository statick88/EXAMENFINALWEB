const db = require('../config/database');

const getClientes = async () => {
  const [rows] = await db.query('SELECT * FROM Clientes');
  return rows;
};

const getClienteById = async (id) => {
  const [rows] = await db.query('SELECT * FROM Clientes WHERE cliente_id = ?', [id]);
  return rows[0];
};

const createCliente = async (nombre, email, telefono, direccion) => {
  const [result] = await db.query(
    'INSERT INTO Clientes (nombre, email, telefono, direccion) VALUES (?, ?, ?, ?)',
    [nombre, email, telefono, direccion]
  );
  return result.insertId;
};

const updateCliente = async (id, nombre, email, telefono, direccion) => {
  await db.query(
    'UPDATE Clientes SET nombre = ?, email = ?, telefono = ?, direccion = ? WHERE cliente_id = ?',
    [nombre, email, telefono, direccion, id]
  );
};

const deleteCliente = async (id) => {
  await db.query('DELETE FROM Clientes WHERE cliente_id = ?', [id]);
};

module.exports = { getClientes, getClienteById, createCliente, updateCliente, deleteCliente };
