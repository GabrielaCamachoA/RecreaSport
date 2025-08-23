import { sequelize } from "../../conexion/conexion.js";

// Importar todos los modelos
import Contestants from "./Contestants.js";
import Demographic from "./Demographics.js";
import Districts from "./Districts.js";
import DocumentType from "./Document_types.js";
import Gender from "./Genders.js";
import Inscriptions from "./Inscriptions.js";
import Neighborhoods from "./Neighborhoods.js";
import Role from "./Roles.js";
import Schedules from "./Schedules.js";
import Sports from "./Sports.js";
import Trainers from "./Trainers.js";
import User from "./User.js";
import Venues from "./Venues.js";

// Definir todas las asociaciones

// User -> Tablas de catálogo
User.belongsTo(DocumentType, { foreignKey: "id_document_type" });
User.belongsTo(Gender, { foreignKey: "id_gender" });
User.belongsTo(Demographic, { foreignKey: "id_demographic" });
User.belongsTo(Role, { foreignKey: "id_rol" });

// User -> Trainers y Contestants
User.hasOne(Trainers, { foreignKey: "id_user" });
Trainers.belongsTo(User, { foreignKey: "id_user" });
User.hasOne(Contestants, { foreignKey: "id_user" });
Contestants.belongsTo(User, { foreignKey: "id_user" });

// Neighborhoods -> Districts
Neighborhoods.belongsTo(Districts, { foreignKey: "id_disctrict" });
Districts.hasMany(Neighborhoods, { foreignKey: "id_disctrict" });

// Sports -> Tablas de catálogo y Trainers
Sports.belongsTo(Trainers, { foreignKey: "id_trainer" });
Sports.belongsTo(Venues, { foreignKey: "id_venue" });
Sports.belongsTo(Schedules, { foreignKey: "id_schedule" });
Trainers.hasMany(Sports, { foreignKey: "id_trainer" });
Venues.hasMany(Sports, { foreignKey: "id_venue" });
Schedules.hasMany(Sports, { foreignKey: "id_schedule" });

// Inscriptions -> Neighborhoods, Contestants y Sports
Inscriptions.belongsTo(Neighborhoods, { foreignKey: "id_neighborhood" });
Inscriptions.belongsTo(Contestants, { foreignKey: "id_contestants" });
Inscriptions.belongsTo(Sports, { foreignKey: "id_sport" });
Neighborhoods.hasMany(Inscriptions, { foreignKey: "id_neighborhood" });
Contestants.hasMany(Inscriptions, { foreignKey: "id_contestants" });
Sports.hasMany(Inscriptions, { foreignKey: "id_sport" });

// Exportar el objeto con todos los modelos
const models = {
  sequelize,
  Contestants,
  Demographic,
  Districts,
  DocumentType,
  Gender,
  Inscriptions,
  Neighborhoods,
  Role,
  Schedules,
  Sports,
  Trainers,
  User,
  Venues,
};

export default models;
