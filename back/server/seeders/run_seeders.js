import { loadDocumentTypesToDataBase } from "./load_document_types.js";
import { loadDemographicsToDataBase } from "./load_demographics.js";
import { loadGendersToDataBase } from "./load_genders.js";
import { loadRolesToDataBase } from "./load_roles.js";
import { loadUsersToDataBase } from "./load_users.js";
import { loadNeighborhoodsToDataBase } from "./load_neighborhoods.js";
import { loadDistrictsToDataBase } from "./load_disctricts.js";
import { loadVenuesToDataBase } from "./load_venues.js";
import { loadSchedulesToDataBase } from "./load_schedules.js";
import { loadSportsToDataBase } from "./load_sports.js";
import { loadTrainersToDataBase } from "./load_trainers.js";

(async () => {
  try {
    console.log("Iniciando Sedeers...");

    // Cargas que no tienen dependencias
    await loadGendersToDataBase();
    await loadDocumentTypesToDataBase();
    await loadDemographicsToDataBase();
    await loadRolesToDataBase();

    // Cargas que dependen de otros
    await loadUsersToDataBase();
    await loadTrainersToDataBase(); // ¡NUEVO!

    await loadDistrictsToDataBase();
    await loadNeighborhoodsToDataBase();
    await loadVenuesToDataBase();
    await loadSchedulesToDataBase();
    await loadSportsToDataBase();

    console.log("OK-> Todos los Sedeers ejecutados correctamente.");
  } catch (error) {
    // Imprime el error completo para ver el problema específico
    console.error("Error ejecutando los Sedeers...", error);
  } finally {
    process.exit();
  }
})();
