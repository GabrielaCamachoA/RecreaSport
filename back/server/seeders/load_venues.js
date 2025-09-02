import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import csv from "csv-parser";
import Venues from "../models/Venues/Venues.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadVenuesToDataBase() {
  const pathFile = path.resolve(__dirname, "../data/Venues.csv");
  const venues = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(pathFile)
      .pipe(csv())
      .on("data", (row) => {
        venues.push({
          id_venue: row.id_venue,
          name: row.name.trim(), // Asigna el valor del 'name' del CSV
          address: row.address.trim(), // Asigna el valor del 'address' del CSV
          capacity: row.capacity,
        });
      })
      .on("end", async () => {
        try {
          const result = await Venues.bulkCreate(venues, {
            validate: true,
            ignoreDuplicates: true,
          });
          console.log(`${result.length} venues were inserted`);
          resolve();
        } catch (error) {
          console.error("Error inserting venues:", error.message);
          reject(error);
        }
      });
  });
}
