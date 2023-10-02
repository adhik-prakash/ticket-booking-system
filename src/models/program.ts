import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import { CategoryEnum } from "../enum/categoryEnum";

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
    // category: {
    //     type: DataTypes.ENUM("SILVER", "GOLD", "PLATINUM"),
    //     defaultValue:CategoryEnum.SILVER,
    //     allowNull: false,
    //   },
    seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);
