import { DataTypes } from "sequelize";
import { sequelize } from "../conexion.js";

const Venues = sequelize.define(
  "Venues",
  {
    id_venue: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING(45), allowNull: false },
    address: { type: DataTypes.STRING(100), allowNull: false },
    capacity: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "Venues",
    timestamps: false,
  }
);

export default Venues;
