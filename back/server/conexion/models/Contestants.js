// server/models/Contestants.js
import { DataTypes } from "sequelize";
import { sequelize } from "../conexion.js";

const Contestants = sequelize.define(
  "Contestants",
  {
    id_contestants: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_user: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "Contestants",
    timestamps: false,
  }
);

export default Contestants;
