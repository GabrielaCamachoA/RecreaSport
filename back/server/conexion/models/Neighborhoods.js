import { DataTypes } from "sequelize";
import { sequelize } from "../conexion.js";
import Districts from "./Districts.js"; // Importa el modelo relacionado

const Neighborhoods = sequelize.define(
  "Neighborhoods",
  {
    id_neighborhood: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING(45), allowNull: false },
    id_disctrict: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "Neighborhoods",
    timestamps: false,
  }
);

export default Neighborhoods;
