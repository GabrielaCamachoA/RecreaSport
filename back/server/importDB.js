import fs from "fs";
import path from "path";
import sequelize from "./conexion/conexion.js"; // tu conexión Sequelize

async function importDB() {
  try {
    await sequelize.authenticate();
    console.log("Conexión a DB OK");

    const sqlPath = path.join(path.resolve(), "../recreasportDB.sql");
    const sql = fs.readFileSync(sqlPath, "utf-8");

    // Ejecutar todas las instrucciones SQL
    await sequelize.query(sql, { raw: true, multipleStatements: true });

    console.log("Importación completada ✅");
    process.exit(0);
  } catch (err) {
    console.error("Error importando la DB:", err);
    process.exit(1);
  }
}

importDB();
