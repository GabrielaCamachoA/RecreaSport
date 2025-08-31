import express from "express";
import { sequelize, connectDB } from "./conexion/conexion.js";
import { defineRelationships } from "./models/relationships.js";
import cors from "cors";
import { Users } from "./models/index.js";

const PORT = 5000;
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

async function startServer() {
  try {
    await connectDB();
    defineRelationships();

    // sincronizar modelos
    await sequelize.sync({ alter: true });
    console.log("✅ Modelos sincronizados con la base de datos.");

    /* ==========================
       CRUD USERS
    ========================== */

    // Obtener todos los usuarios
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

    // Login
    app.post("/login", async (req, res) => {
      const { username, password } = req.body;

      try {
        console.log("🔍 Buscando usuario:", `"${username}"`);

        const user = await Users.findOne({
          where: { name: username.trim() },
        });

        if (!user) {
          console.log("❌ Usuario no encontrado");
          return res
            .status(404)
            .json({ success: false, message: "Usuario no encontrado" });
        }

        // Forzar ambos a string y trim
        if (String(user.number_id).trim() !== String(password).trim()) {
          console.log("❌ Contraseña no coincide");
          return res
            .status(401)
            .json({ success: false, message: "Credenciales inválidas" });
        }

        console.log("✅ Login exitoso");
        res.status(200).json({
          success: true,
          message: "Login exitoso",
          user: {
            id: user.id_user,
            username: user.name,
            role: user.id_rol,
          },
        });
      } catch (error) {
        console.error("Error en el login:", error);
        res.status(500).json({
          success: false,
          message: "Error en el login",
          error: error.message,
        });
      }
    });

    // Registro
    app.post("/register", async (req, res) => {
      const {
        username,
        surname,
        phone,
        at_birthday,
        attendanceRate,
        role,
        id_document_type,
        number_id,
        id_gender,
        id_demographic,
      } = req.body;

      try {
        const newUser = await Users.create({
          name: username,
          surname,
          phone,
          at_birthday,
          attendanceRate: attendanceRate || null,
          id_rol: role,
          id_document_type,
          number_id,
          id_gender,
          id_demographic,
        });

        res.status(201).json({
          success: true,
          message: "Usuario registrado con éxito",
          user: newUser,
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Error al crear usuario",
          error: error.message,
        });
      }
    });

    // Iniciar server
    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error iniciando servidor:", error);
  }
}

startServer();
