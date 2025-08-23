import fs from "fs"; //permite leer archivos
import path from "path"; //muestra la ruta actual
import csv from "csv-parser";
import Demograpics from "../conexion/models/Demographics.js";

export async function loadDemographicsToDataBase() {
  const pathFile = path.resolve("server/data/Demographics.csv");
  const demographics = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(pathFile)
      .pipe(csv())
      .on("data", (row) => {
        demographics.push({
          id_demographic: row.id_demographic,
          name: row.name.trim(),
          codename: row.codename,
        });
      })
      .on("end", async () => {
        try {
          const result = await Demograpics.bulkCreate(demographics, {
            validate: true,
            ignoreDuplicates: true,
          });
          console.log(`${result.length} demographics were inserted`);
          resolve();
        } catch (error) {
          console.error("Error inserting demographics:", error.message);
          reject(error);
        }
      });
  });
}
