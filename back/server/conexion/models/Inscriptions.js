import { DataTypes } from "sequelize";
import { sequelize } from "../conexion.js";

const Inscriptions = sequelize.define(
  "Inscriptions",
  {
    id_inscription: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    at_inscription: { type: DataTypes.DATE, allowNull: false },
    id_neighborhood: { type: DataTypes.INTEGER, allowNull: false },
    id_contestants: { type: DataTypes.INTEGER, allowNull: false },
    id_sport: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.BOOLEAN, allowNull: true },
  },
  {
    tableName: "Inscriptions",
    timestamps: false,
  }
);

export default Inscriptions;
