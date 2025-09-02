import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import csv from "csv-parser";
import { Sports } from "../models/index.js"; // Asegúrate de que la ruta a tu modelo sea correcta

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadSportsToDataBase() {
  const pathFile = path.resolve(__dirname, "../data/Sports.csv");
  const sports = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(pathFile)
      .pipe(csv())
      .on("data", (row) => {
        sports.push({
          id_sport: row.id_sport,
          name: row.name.trim(),
          codename: row.codename,
          id_trainer: row.id_trainer,
          id_venue: row.id_venue,
          id_schedule: row.id_schedule,
        });
      })
      .on("end", async () => {
        try {
          const result = await Sports.bulkCreate(sports, {
            validate: true,
            ignoreDuplicates: true,
          });
          console.log(`${result.length} sports were inserted`);
          resolve();
        } catch (error) {
          console.error("Error inserting sports:", error.message);
          reject(error);
        }
      });
  });
}
