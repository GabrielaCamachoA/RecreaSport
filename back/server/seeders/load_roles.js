import fs from "fs"; //permite leer archivos
import path from "path"; //muestra la ruta actual
import csv from "csv-parser";
import Roles from "../conexion/models/Roles.js";

export async function loadRolesToDataBase() {
  const pathFile = path.resolve("server/data/Roles.csv");
  const roles = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(pathFile)
      .pipe(csv())
      .on("data", (row) => {
        roles.push({
          id_rol: row.id_rol,
          name: row.name.trim(),
          codename: row.codename,
        });
      })
      .on("end", async () => {
        try {
          const result = await Roles.bulkCreate(roles, {
            validate: true,
            ignoreDuplicates: true,
          });
          console.log(`${result.length} roles were inserted`);
          resolve();
        } catch (error) {
          console.error("Error inserting roles:", error.message);
          reject(error);
        }
      });
  });
}
