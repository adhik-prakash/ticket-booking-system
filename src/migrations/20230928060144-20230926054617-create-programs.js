'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     * 
     */
 
    await queryInterface.addColumn("programs","seats",{
      type:Sequelize.INTEGER,
      allowNull:false,
      defaultValue: 0
    
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("programs","category",{
      type:Sequelize.STRING
    })
    await queryInterface.removeColumn("programs","seats",{
      type:Sequelize.STRING
    })

  }
};
