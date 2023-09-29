module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ticketsenrty', [{
      user_id:3,
      id:1,
      program_id:1,
      counts:10,
      created_at: new Date(),
      updated_at: new Date()
    }, 
    {
      id:2,
      program_id:2,
     counts:20,
      user_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
        id:3,
      program_id:3,
      counts:30,
      user_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    },
    { id:4,
      program_id:4,
      counts:40,
      user_id: 3,
      created_at: new Date(),
      updated_at: new Date()

    }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ticketsenrty', null, {});
  }
};