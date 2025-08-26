import { DataTypes } from "sequelize";
import { sequelize } from "../../conexion/conexion.js";

const DocumentTypes = sequelize.define(
  "DocumentTypes",
  {
    id_document_type: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true, // según MySQL es nullable
    },
    codename: {
      type: DataTypes.STRING(5),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "Document_types",
    timestamps: false,
  }
);

export default DocumentTypes;
