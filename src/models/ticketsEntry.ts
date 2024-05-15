import { DataTypes } from "sequelize";
import { sequelize } from "../config";

export const TicketEntry = sequelize.define(
  "ticketEntry",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    programId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    counts: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);
