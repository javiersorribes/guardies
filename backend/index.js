const express = require('express');
const app = express();
const port = 3000; // Puerto donde escucharás peticiones

// Ruta principal de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de gestión de guardias!' });
});

  const mongoose = require('mongoose');

  // La URL de conexión la obtendrás de Atlas, algo así como:
  const mongoUri = "mongodb+srv://javiersorribes:6aq34mdskAH4qlXh@guardies.z8ior.mongodb.net/?retryWrites=true&w=majority&appName=guardies";
  
  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch(err => console.error("Error al conectar a la BD:", err));
  
  const personaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    rol: { type: String, required: true }
  });

  app.get('/personas', async (req, res) => {
    try {
      const personas = await Persona.find();
      res.json(personas);
    } catch (err) {
      res.status(500).json({ error: "Error al obtener personas" });
    }
  });
  
  
  const Persona = mongoose.model('Persona', personaSchema);
   
  app.use(express.json()); // Para interpretar JSON en el body

  app.post('/personas', async (req, res) => {
    try {
      const { nombre, rol } = req.body;
      const nuevaPersona = new Persona({ nombre, rol });
      const personaGuardada = await nuevaPersona.save();
      res.json(personaGuardada);
    } catch (err) {
      res.status(500).json({ error: "Error al crear persona" });
    }
  });

  
  app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
