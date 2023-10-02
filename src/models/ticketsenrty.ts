import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../config";
import { Program } from "./program";
export const TicketEntry = sequelize.define(
  "ticketsenrty",
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
    programId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "programs",
        key: "id",
      },
    },

    counts: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    underscored: true,
    tableName: "ticketsenrty",
    freezeTableName: true,
  }
);

TicketEntry.belongsTo(Program, {
  foreignKey: "programId",
  as: "program",
});
Program.hasMany(TicketEntry, {
  foreignKey: "programId",
  as: "tickets",
});
