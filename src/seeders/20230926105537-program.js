module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("programs", [
      {
        id: 10,
        program_name: "Bryan Adams Concert",
        user_id: 1,
        seats: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        program_name: "Sabin Rai Concert",
        user_id: 1,
        seats: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        program_name: "Anuprastha Concert",
        user_id: 1,
        seats: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 13,
        program_name: "Nabin K Bhattrai concert",
        user_id: 1,
        seats: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("programs", null, {});
  },
};
