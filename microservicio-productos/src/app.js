const express = require('express');
const app = express();
const productoRoutes = require('./routes/productos');

// Configuración
app.use(express.json()); // Middleware para parsear JSON
app.use('/api', productoRoutes); // Usar las rutas de productos

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Microservicio de Productos corriendo en el puerto ${PORT}`);
});
