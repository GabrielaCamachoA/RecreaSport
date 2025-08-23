import { loadDocumentTypesToDataBase } from "./load_document_types.js";
import { loadDemographicsToDataBase } from "./load_demographics.js";
import { loadGendersToDataBase } from "./load_genders.js";
import { loadRolesToDataBase } from "./load_roles.js";
import { loadUsersToDataBase } from "./load_users.js";

(async () => {
  try {
    console.log("Iniciando Sedeers...");

    await loadGendersToDataBase();
    await loadDocumentTypesToDataBase();
    await loadDemographicsToDataBase();
    await loadRolesToDataBase();
    await loadUsersToDataBase();

    console.log("OK-> Todos los Sedeers ejecutados correctamente.");
  } catch (error) {
    // Imprime el error completo para ver el problema específico
    console.error("Error ejecutando los Sedeers...", error);
  } finally {
    process.exit();
  }
})();
