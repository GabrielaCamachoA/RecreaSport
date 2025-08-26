import { DataTypes } from "sequelize";
import { sequelize } from "../../conexion/conexion.js";

const Demographics = sequelize.define(
  "Demographics",
  {
    id_demographic: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    codename: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "Demographics",
    timestamps: false,
  }
);

export default Demographics;
