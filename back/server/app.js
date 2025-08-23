import express from "express";
import { sequelize, connectDB } from "./conexion/conexionDB.js";
import User from "./conexion/models/User.js";

const PORT = 5000;

const app = express();

app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});


async function startServer() {
  await connectDB();
  
  // Sincroniza el modelo con la tabla en la base de datos
  // Esto crea la tabla 'users' si no existe
  await User.sync({ alter: true });
  console.log('Modelos sincronizados con la base de datos.');

  // Rutas para la API

  // GET: Obtener todos los usuarios
  app.get('/users', async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  });

 
  app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
  });
}

startServer();
