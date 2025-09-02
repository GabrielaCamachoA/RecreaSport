import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import csv from "csv-parser";
import Neighborhoods from "../models/Neighborhoods/Neighborhoods.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadNeighborhoodsToDataBase() {
  const pathFile = path.resolve(__dirname, "../data/Neighborhoods.csv");
  const neighborhoods = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(pathFile)
      .pipe(csv())
      .on("data", (row) => {
        neighborhoods.push({
          id_neighborhood: row.id_neighborhood,
          name: row.name.trim(),
          id_disctrict: row.id_district,
        });
      })
      .on("end", async () => {
        try {
          const result = await Neighborhoods.bulkCreate(neighborhoods, {
            validate: true,
            ignoreDuplicates: true,
          });
          console.log(`${result.length} neighborhoods were inserted`);
          resolve();
        } catch (error) {
          console.error("Error inserting neighborhoods:", error.message);
          reject(error);
        }
      });
  });
}
