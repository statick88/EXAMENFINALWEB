const productoModel = require('../models/producto');

const getProductos = async (req, res) => {
  try {
    const productos = await productoModel.getProductos();
    res.json({productos});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProductoById = async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await productoModel.getProductoById(id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createProducto = async (req, res) => {
  const { nombre, precio, stock } = req.body;
  try {
    const id = await productoModel.createProducto(nombre, precio, stock);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, stock } = req.body;
  try {
    await productoModel.updateProducto(id, nombre, precio, stock);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteProducto = async (req, res) => {
  const { id } = req.params;
  try {
    await productoModel.deleteProducto(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getProductos, getProductoById, createProducto, updateProducto, deleteProducto };
