'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    queryInterface.bulkInsert('time_zones', [
      {
        username: 'admin',
        password: '12345',
      },
      {
        email: 'saurabh',
        username: '12345',
      }
    ]);    

    console.log("all done");

  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};