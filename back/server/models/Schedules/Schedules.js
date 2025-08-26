// server/models/Schedules.js
import { DataTypes } from "sequelize";
import { sequelize } from "../../conexion/conexion.js";

const Schedules = sequelize.define(
  "Schedules",
  {
    id_schedule: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    start_date: { type: DataTypes.DATE, allowNull: false },
    end_date: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: "Schedules",
    timestamps: false,
  }
);

export default Schedules;
