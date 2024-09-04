const clienteModel = require('../models/cliente');

const getClientes = async (req, res) => {
  try {
    const clientes = await clienteModel.getClientes();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getClienteById = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await clienteModel.getClienteById(id);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createCliente = async (req, res) => {
  const { nombre, email, telefono, direccion } = req.body;
  try {
    const id = await clienteModel.createCliente(nombre, email, telefono, direccion);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, email, telefono, direccion } = req.body;
  try {
    await clienteModel.updateCliente(id, nombre, email, telefono, direccion);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteCliente = async (req, res) => {
  const { id } = req.params;
  try {
    await clienteModel.deleteCliente(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getClientes, getClienteById, createCliente, updateCliente, deleteCliente };
