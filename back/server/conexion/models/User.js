import { DataTypes } from "sequelize";
import { sequelize } from "../conexionDB.js";
import DocumentType from "./Document_types.js";
import Gender from "./Genders.js";
import Demographic from "./Demographics.js";
import Role from "./Roles.js";

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

// Relaciones (foreign keys)
User.belongsTo(DocumentType, { foreignKey: "id_document_type" });
User.belongsTo(Gender, { foreignKey: "id_gender" });
User.belongsTo(Demographic, { foreignKey: "id_demographic" });
User.belongsTo(Role, { foreignKey: "id_rol" });

export default User;
