module.exports = {
  async up(queryInterface, Sequelize) {
      const programs = [];
    for (let i = 1; i <= 20; i++) {
      programs.push({
        name: "Arjit Singh Concert",
        price: parseInt((Math.random() * 1000)), // Random price between 0 and 1000
        category: ['Silver', 'Gold', 'Platinum'][Math.floor(Math.random() * 3)],
        user_id: Math.floor(Math.random() * 2) + 5, // Random user ID between 5 and 6
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    const columns = Object.keys(programs[0]);
    const values = programs.map(programs => Object.values(programs));
    await queryInterface.bulkInsert('programs', values.map((value) => Object.assign({}, ...columns.map((col, index) => ({
      [col]: value[index]
    })))));
    
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};