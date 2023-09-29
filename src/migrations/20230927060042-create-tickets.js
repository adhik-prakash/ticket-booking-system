"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ticketsenrty", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      program_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "programs",
          key: "id",
        },
      },
      counts: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      user_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: "users",
          key:"id"
        }

      },
    
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ticketsenrty");
  },
};
