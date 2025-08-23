import { Inscriptions } from "./Inscriptions/index.js";
import { Neighborhoods } from "./Neighborhoods/index.js";
import { Sports } from "./Sports/index.js";
import { Trainers } from "./Trainers/index.js";
import { Contestants } from "./Contestants/index.js";
import { Users } from "./Users/index.js";
import { Districts } from "./Districts/index.js";
import { Venues } from "./Venues/index.js";
import { Schedules } from "./Schedules/index.js";
import { DocumentTypes } from "./Document_types/index.js";
import { Genders } from "./Genders/index.js";
import { Demographics } from "./Demographics/index.js";
import { Roles } from "./Roles/index.js";

export const defineRelationships = () => {
  console.log("📊 Definiendo relaciones entre modelos...");

  // 1. RELACIONES DE INSCRIPTIONS
  Inscriptions.belongsTo(Neighborhoods, {
    foreignKey: "id_neighborhood",
    as: "neighborhood",
  });
  Inscriptions.belongsTo(Contestants, {
    foreignKey: "id_contestants",
    as: "contestant",
  });
  Inscriptions.belongsTo(Sports, {
    foreignKey: "id_sport",
    as: "sport",
  });

  Neighborhoods.hasMany(Inscriptions, {
    foreignKey: "id_neighborhood",
    as: "inscriptions",
  });
  Contestants.hasMany(Inscriptions, {
    foreignKey: "id_contestants",
    as: "inscriptions",
  });
  Sports.hasMany(Inscriptions, {
    foreignKey: "id_sport",
    as: "inscriptions",
  });

  // 2. RELACIONES DE NEIGHBORHOODS
  Neighborhoods.belongsTo(Districts, {
    foreignKey: "id_disctrict",
    as: "district",
  });
  Districts.hasMany(Neighborhoods, {
    foreignKey: "id_disctrict",
    as: "neighborhoods",
  });

  // 3. RELACIONES DE SPORTS
  Sports.belongsTo(Trainers, {
    foreignKey: "id_trainer",
    as: "trainer",
  });
  Sports.belongsTo(Venues, {
    foreignKey: "id_venue",
    as: "venue",
  });
  Sports.belongsTo(Schedules, {
    foreignKey: "id_schedule",
    as: "schedule",
  });

  Trainers.hasMany(Sports, {
    foreignKey: "id_trainer",
    as: "sports",
  });
  Venues.hasMany(Sports, {
    foreignKey: "id_venue",
    as: "sports",
  });
  Schedules.hasMany(Sports, {
    foreignKey: "id_schedule",
    as: "sports",
  });

  // 4. RELACIONES DE TRAINERS
  Trainers.belongsTo(Users, {
    foreignKey: "id_user",
    as: "user",
  });
  Users.hasOne(Trainers, {
    foreignKey: "id_user",
    as: "trainer",
  });

  // 5. RELACIONES DE CONTESTANTS
  Contestants.belongsTo(Users, {
    foreignKey: "id_user",
    as: "user",
  });
  Users.hasOne(Contestants, {
    foreignKey: "id_user",
    as: "contestant",
  });

  // 6. RELACIONES DE USERS CON TABLAS DE CATÁLOGO (¡ESTAS FALTABAN!)
  Users.belongsTo(DocumentTypes, {
    foreignKey: "id_document_type",
    as: "documentType",
  });
  Users.belongsTo(Genders, {
    foreignKey: "id_gender",
    as: "gender",
  });
  Users.belongsTo(Demographics, {
    foreignKey: "id_demographic",
    as: "demographic",
  });
  Users.belongsTo(Roles, {
    foreignKey: "id_rol",
    as: "role",
  });

  // Relaciones inversas para las tablas de catálogo
  DocumentTypes.hasMany(Users, {
    foreignKey: "id_document_type",
    as: "users",
  });
  Genders.hasMany(Users, {
    foreignKey: "id_gender",
    as: "users",
  });
  Demographics.hasMany(Users, {
    foreignKey: "id_demographic",
    as: "users",
  });
  Roles.hasMany(Users, {
    foreignKey: "id_rol",
    as: "users",
  });

  console.log("✅ Todas las relaciones definidas correctamente");
};
