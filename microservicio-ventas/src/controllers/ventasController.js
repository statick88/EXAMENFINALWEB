const compraModel = require('../models/venta'); // Asegúrate de que la ruta al modelo sea correcta

const createCompra = async (req, res) => {
  const { clienteId, productos } = req.body;
  try {
    const compraId = await compraModel.createCompra(clienteId, productos);
    res.status(201).json({ compraId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCompraById = async (req, res) => {
  const { id } = req.params;
  try {
    const compra = await compraModel.getCompraById(id);
    if (compra) {
      res.json(compra);
    } else {
      res.status(404).json({ message: 'Compra no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getComprasByCliente = async (req, res) => {
  const { clienteId } = req.params;
  try {
    const compras = await compraModel.getComprasByCliente(clienteId);
    res.json(compras);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createCompra, getCompraById, getComprasByCliente };
