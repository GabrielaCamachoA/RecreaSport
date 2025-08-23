import fs from "fs"; //permite leer archivos
import path from "path"; //muestra la ruta actual
import csv from "csv-parser";
import Genders from "../conexion/models/Genders.js";

export async function loadGendersToDataBase() {
  const pathFile = path.resolve("server/data/Genders.csv");
  const genders = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(pathFile)
      .pipe(csv())
      .on("data", (row) => {
        genders.push({
          id_gender: row.id_gender,
          name: row.name.trim(),
          codename: row.codename,
        });
      })
      .on("end", async () => {
        try {
          const result = await Genders.bulkCreate(genders, {
            validate: true,
            ignoreDuplicates: true,
          });
          console.log(`${result.length} genres were inserted`);
          resolve();
        } catch (error) {
          console.error("Error inserting genres:", error.message);
          reject(error);
        }
      });
  });
}
