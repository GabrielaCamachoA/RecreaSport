import { DataTypes } from "sequelize";
import { sequelize } from "../conexion.js";

const Role = sequelize.define(
  "Role",
  {
    id_rol: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    codename: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "Roles",
    timestamps: false,
  }
);

export default Role;
