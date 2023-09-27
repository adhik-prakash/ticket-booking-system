import { DataTypes } from "sequelize";
import { sequelize } from "../config";

export const Program = sequelize.define(
  "programs",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    programName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    scheduledDate: {
      allowNull:false,
      type:DataTypes.DATE
    }
  },
  {
    timestamps: true,
    underscored: true,
  }
);
