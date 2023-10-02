module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ticketsenrty", [
      {
        id: 1,
        user_id: 1,
        program_id: 1,
        counts: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        user_id: 1,
        program_id: 2,
        counts: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        user_id: 1,
        program_id: 3,
        counts: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        user_id: 1,
        program_id: 4,
        counts: 40,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ticketsenrty", null, {});
  },
};
