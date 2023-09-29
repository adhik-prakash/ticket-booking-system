import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../config";
export const BookingModel = sequelize.define(
  "bookingmodels",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    bookingId: {
      allowNull: false,
      type: DataTypes.STRING,
      references: {
        model: "ticketsenrty",
        key: "id",
      },
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);
