const express = require('express');
const router = express.Router();
const compraController = require('../controllers/ventasController');

router.post('/compras', compraController.createCompra);
router.get('/compras/:id', compraController.getCompraById);
router.get('/compras/clientes/:clienteId', compraController.getComprasByCliente);

module.exports = router;
