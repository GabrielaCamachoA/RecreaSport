import { DataTypes } from "sequelize";
import { sequelize } from "../../conexion/conexion.js";

const Roles = sequelize.define(
  "Roles",
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

export default Roles;
