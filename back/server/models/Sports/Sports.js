// server/models/Sports.js
import { DataTypes } from "sequelize";
import { sequelize } from "../../conexion/conexion.js";


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

export default Sports;
