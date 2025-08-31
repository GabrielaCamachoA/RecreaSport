import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import csv from "csv-parser";
import Districts from "../models/Districts/Districts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadDistrictsToDataBase() {
  const pathFile = path.resolve(__dirname, "../data/Districts.csv");
  const districts = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(pathFile)
      .pipe(csv())
      .on("data", (row) => {
        districts.push({
          id_disctrict: row.id_disctrict,
          name: row.name.trim(),
          codename: row.codename,
        });
      })
      .on("end", async () => {
        try {
          const result = await Districts.bulkCreate(districts, {
            validate: true,
            ignoreDuplicates: true,
          });
          console.log(`${result.length} districts were inserted`);
          resolve();
        } catch (error) {
          console.error("Error inserting districts:", error.message);
          reject(error);
        }
      });
  });
}
