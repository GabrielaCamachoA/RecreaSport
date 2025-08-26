// models/Gender.js
import { DataTypes } from "sequelize";
import { sequelize } from "../../conexion/conexion.js";

const Genders = sequelize.define(
  "Genders",
  {
    id_gender: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    codename: {
      type: DataTypes.STRING(5),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "Genders",
    timestamps: false,
  }
);

export default Genders;
