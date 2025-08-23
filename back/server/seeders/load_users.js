import fs from "fs"; //permite leer archivos
import path from "path"; //muestra la ruta actual
import csv from "csv-parser";
import { Users } from "../models/index.js";

export async function loadUsersToDataBase() {
  const pathFile = path.resolve("server/data/Users.csv");
  const users = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(pathFile)
      .pipe(csv())
      .on("data", (row) => {
        users.push({
          id_user: row.id_user,
          name: row.name.trim(),
          surname: row.surname.trim(),
          at_birthday: row.at_birthday,
          phone: row.phone,
          id_document_type: row.id_document_type,
          number_id: row.number_id,
          id_gender: row.id_gender,
          id_demographic: row.id_demographic,
          id_rol: row.id_rol,
        });
      })
      .on("end", async () => {
        try {
          const result = await Users.bulkCreate(users, {
            validate: true,
            ignoreDuplicates: true,
          });
          console.log(`${result.length} users were inserted`);
          resolve();
        } catch (error) {
          console.error("Error inserting users:", error.message);
          reject(error);
        }
      });
  });
}
