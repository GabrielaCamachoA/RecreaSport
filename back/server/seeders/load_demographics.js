import fs from "fs";
import path from "path";
import csv from "csv-parser";
import models from "../conexion/models/index.js";

const { Demographic } = models;

export async function loadDemographicsToDataBase() {
  // 🟢 Usa path.join para construir una ruta segura y absoluta
  const pathFile = path.join(
    process.cwd(),
    "server",
    "data",
    "Demographics.csv"
  );
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
          const result = await Demographic.bulkCreate(demographics, {
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
