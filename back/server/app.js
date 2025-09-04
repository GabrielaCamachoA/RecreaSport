import express from "express";
import { sequelize, connectDB } from "./conexion/conexion.js";
import { defineRelationships } from "./models/relationships.js";
import cors from "cors";

// Importar routers
import usersRoutes from "./routes/usersRoutes.js";
import contestantsRoutes from "./routes/contestantsRoutes.js";
import sportsRoutes from "./routes/sportsRoutes.js";
import trainersRoutes from "./routes/trainersRoutes.js";
import inscriptionsRoutes from "./routes/inscriptionsRoutes.js";
import schedulesRoutes from "./routes/schedulesRoutes.js";
import venuesRoutes from "./routes/venuesRoutes.js";
import documentTypesRoutes from "./routes/documentTypesRoutes.js";
import neighborhoodsRoutes from "./routes/neighborhoodsRoutes.js";
import gendersRoutes from "./routes/gendersRoutes.js";

const app = express();

// Puerto dinámico para Vercel o fallback a 5000
const PORT = process.env.PORT || 5000;

// Middleware JSON
app.use(express.json());

// CORS dinámico: permite localhost para dev y tu dominio en Vercel
const allowedOrigins = [
  "http://localhost:5173",
  "https://recrea-sport.vercel.app",
];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS no permitido"));
      }
    },
    credentials: true,
  })
);

// Montar routers
app.use("/api/users", usersRoutes);
app.use("/api/contestants", contestantsRoutes);
app.use("/api/sports", sportsRoutes);
app.use("/api/trainers", trainersRoutes);
app.use("/api/inscriptions", inscriptionsRoutes);
app.use("/api/schedules", schedulesRoutes);
app.use("/api/venues", venuesRoutes);
app.use("/api/documentTypes", documentTypesRoutes);
app.use("/api/neighborhoods", neighborhoodsRoutes);
app.use("/api/genders", gendersRoutes);

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// Función para arrancar el servidor
async function startServer() {
  try {
    await connectDB(); // Se conecta a MySQL usando variables de entorno
    defineRelationships();

    // Sincronizar modelos
    await sequelize.sync({ alter: true });
    console.log("✅ Modelos sincronizados con la base de datos.");

    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error iniciando servidor:", error);
    process.exit(1); // Detiene el proceso si hay error
  }
}

startServer();
