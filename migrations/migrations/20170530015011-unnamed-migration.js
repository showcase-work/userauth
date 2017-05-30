'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('loctracker', {
      id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
            velocity: {
            type: Sequelize.STRING
        },
            longitude: {
            type: Sequelize.STRING
        },
            latitude: {
            type: Sequelize.STRING
        },
            bearing: {
            type: Sequelize.STRING
        },
            imei: {
            type: Sequelize.STRING
        },
            createdAt: {
            type: Sequelize.DATE
        },
            updatedAt: {
            type: Sequelize.DATE
        }
      },
      {
          tableName: "loctracker",
          timestamps: true
      });

  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('loctracker');
  }
};