import express from "express";
import { sequelize, connectDB } from "./conexion/conexion.js";
import { defineRelationships } from "./models/relationships.js"; // ← Importa las relaciones
import cors from "cors";
import { Users } from "./models/index.js";
const PORT = 5000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // URL de tu frontend
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

async function startServer() {
  try {
    await connectDB();
    // Definir relaciones después de conectar la DB
    defineRelationships();

    // Sincronizar modelos
    await sequelize.sync({ alter: true });
    console.log("✅ Modelos sincronizados con la base de datos.");

    /* crud users */
    /* getAll */
    app.get("/users", async (req, res) => {
      try {
        const users = await Users.findAll();

        res.status(200).json({
          success: true,
          data: users,
          count: users.length,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Error al obtener usuarios",
          error: error.message,
        });
      }
    });

    // login
    app.post("/login", async (req, res) => {
      const {username, password} = req.body;
      try {
        const user = await Users.findOne({where: {name: username}});
        if (!user) {
          return res.status(404).json({ success: false, message: "Usuario no encontrado" });
        }

        if (user.number_id !== password) {
          return res.status(401).json({ success: false, message: "Credenciales inválidas" });
        }

        res.status(200).json({
          success: true,
          message: "Login exitoso",
          user:{
            id: user.id_user,
            username: user.name,
            role: user.id_rol
          }
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Error en el login",
          error: error.message,
        });
      }
    });

    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error iniciando servidor:", error);
  }
}

startServer();
