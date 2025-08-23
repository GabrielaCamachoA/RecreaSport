import { DataTypes } from "sequelize";
import { sequelize } from "../conexion.js";

const User = sequelize.define(
  "User",
  {
    id_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING(100), allowNull: false },
    surname: { type: DataTypes.STRING(100), allowNull: false },
    at_birthday: { type: DataTypes.DATEONLY, allowNull: false },
    phone: { type: DataTypes.STRING(50), allowNull: false },
    id_document_type: { type: DataTypes.INTEGER, allowNull: false },
    number_id: { type: DataTypes.STRING(50), allowNull: false },
    id_gender: { type: DataTypes.INTEGER, allowNull: false },
    id_demographic: { type: DataTypes.INTEGER, allowNull: false },
    id_rol: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "Users",
    timestamps: false,
  }
);

export default User;
