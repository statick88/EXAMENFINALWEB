const express = require('express');
const app = express();
const compraRoutes = require('./routes/ventas');

// Configuración
app.use(express.json()); // Middleware para parsear JSON
app.use('/api', compraRoutes); // Usar las rutas de compras

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Maicroservicio de Compras corriendo en el puerto ${PORT}`);
});
