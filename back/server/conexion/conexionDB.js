import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const credentials = {
  BD: process.env.BD_NAME,
  USER: process.env.BD_USER,
  PASS: process.env.BD_PASSWORD,
  HOST: process.env.BD_HOST
};

export const sequelize = new Sequelize(
  credentials.BD,
  credentials.USER,
  credentials.PASS,
  {
    host: credentials.HOST,
    dialect: "mysql",
  }
);

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión con la base de datos establecida correctamente.");
  } catch (error) {
    console.error("❌ No se pudo conectar a la base de datos:", error);
  }
}
