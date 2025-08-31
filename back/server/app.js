import express from "express";
import { sequelize, connectDB } from "./conexion/conexion.js";
import { defineRelationships } from "./models/relationships.js";
import cors from "cors";
// Importar el nuevo enrutador de usuarios
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

const PORT = 5000;
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Usar el enrutador
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

    // Iniciar server
    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error iniciando servidor:", error);
  }
}

startServer();
