const express = require('express');
const app = express();
const clienteRoutes = require('./routes/clientes');

// Configuración
app.use(express.json()); // Middleware para parsear JSON
app.use('/api', clienteRoutes); // Usar las rutas de clientes

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Iniciar el servidor
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Microservicio de Clientes corriendo en el puerto ${PORT}`);
});
