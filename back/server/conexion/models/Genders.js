// models/Gender.js
import { DataTypes } from "sequelize";
import { sequelize } from "../conexionDB.js";

const Gender = sequelize.define(
  "Gender",
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

export default Gender;
