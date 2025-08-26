import { DataTypes } from "sequelize";
import { sequelize } from "../../conexion/conexion.js";

const Districts = sequelize.define(
  "Districts",
  {
    id_disctrict: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING(100), allowNull: false },
    codename: { type: DataTypes.STRING(45), allowNull: false },
  },
  {
    tableName: "Districts",
    timestamps: false,
  }
);

export default Districts;
