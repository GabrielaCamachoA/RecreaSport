// server/models/Sports.js
import { DataTypes } from "sequelize";
import { sequelize } from "../conexion.js";
import Trainers from "./Trainers.js";
import Venues from "./Venues.js";
import Schedules from "./Schedules.js";

const Sports = sequelize.define(
  "Sports",
  {
    id_sport: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING(100), allowNull: false },
    codename: { type: DataTypes.STRING(45), allowNull: false },
    id_trainer: { type: DataTypes.INTEGER, allowNull: false },
    id_venue: { type: DataTypes.INTEGER, allowNull: false },
    id_schedule: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "Sports",
    timestamps: false,
  }
);

// Relaciones
Sports.belongsTo(Trainers, { foreignKey: "id_trainer" });
Sports.belongsTo(Venues, { foreignKey: "id_venue" });
Sports.belongsTo(Schedules, { foreignKey: "id_schedule" });

// Relaciones inversas (opcional, pero recomendado para consultas bidireccionales)
Trainers.hasMany(Sports, { foreignKey: "id_trainer" });
Venues.hasMany(Sports, { foreignKey: "id_venue" });
Schedules.hasMany(Sports, { foreignKey: "id_schedule" });

export default Sports;
