const express = require('express');
const app = express();
const port = 3000; // Puerto donde escucharás peticiones

// Ruta principal de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de gestión de guardias!' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
