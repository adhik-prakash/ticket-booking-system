module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("programs", [
      {
        id: 1,
        program_name: "Bryan Adams Concert",
        user_id: 1,
        seats: 10,
        available_seats: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        program_name: "Sabin Rai Concert",
        user_id: 1,
        seats: 20,
        available_seats: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        program_name: "Anuprastha Concert",
        user_id: 1,
        seats: 30,
        available_seats: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        program_name: "Nabin K Bhattrai concert",
        user_id: 1,
        seats: 40,
        available_seats: 40,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("programs", null, {});
  },
};
