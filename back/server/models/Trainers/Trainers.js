// server/models/Trainers.js
import { DataTypes } from "sequelize";
import { sequelize } from "../../conexion/conexion.js";

const Trainers = sequelize.define(
  "Trainers",
  {
    id_trainer: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_user: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "Trainers",
    timestamps: false,
  }
);

export default Trainers;
