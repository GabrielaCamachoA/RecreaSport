import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import csv from "csv-parser";
import Schedules from "../models/Schedules/Schedules.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadSchedulesToDataBase() {
  const pathFile = path.resolve(__dirname, "../data/Schedules.csv");
  const schedules = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(pathFile)
      .pipe(csv())
      .on("data", (row) => {
        schedules.push({
          id_schedule: row.id_schedule,
          start_date: row.datetime_start,
          end_date: row.datetime_end,
        });
      })
      .on("end", async () => {
        try {
          const result = await Schedules.bulkCreate(schedules, {
            validate: true,
            ignoreDuplicates: true,
          });
          console.log(`${result.length} schedules were inserted`);
          resolve();
        } catch (error) {
          console.error("Error inserting schedules:", error.message);
          reject(error);
        }
      });
  });
}
