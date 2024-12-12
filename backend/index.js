const express = require('express');
const app = express();
const port = 3000; // Puerto donde escucharás peticiones

// Ruta principal de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de gestión de guardias!' });
});

app.get('/personas', (req, res) => {
    const personas = [
      { id: 1, nombre: 'Juan', rol: 'Médico' },
      { id: 2, nombre: 'María', rol: 'Enfermera' }
    ];
    res.json(personas);
  });
  

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
