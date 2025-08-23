import fs from "fs"; //permite leer archivos
import path from "path"; //muestra la ruta actual
import csv from "csv-parser";
import models from "../conexion/models/index.js";

const { DocumentType } = models;

export async function loadDocumentTypesToDataBase() {
  const pathFile = path.resolve("server/data/Document_types.csv");
  const documentTypes = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(pathFile)
      .pipe(csv())
      .on("data", (row) => {
        documentTypes.push({
          id_document_type: row.id_document_type,
          name: row.name.trim(),
          codename: row.codename,
        });
      })
      .on("end", async () => {
        try {
          const result = await DocumentType.bulkCreate(documentTypes, {
            validate: true,
            ignoreDuplicates: true,
          });
          console.log(`${result.length} documen-types were inserted`);
          resolve();
        } catch (error) {
          console.error("Error inserting documen-types:", error.message);
          reject(error);
        }
      });
  });
}
