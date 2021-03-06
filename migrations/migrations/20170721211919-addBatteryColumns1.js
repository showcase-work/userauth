'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn({
        tableName: 'tracking_day'
      },
      'batteryLevel',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'tracking_day'
      },
      'batteryStatus',
      Sequelize.STRING
    );
    queryInterface.addColumn({
        tableName: 'tracking_day'
      },
      'batteryTemperature',
      Sequelize.STRING
    );
  },

  down: function (queryInterface, Sequelize) {

    queryInterface.removeColumn(
      'tracking_day',
      'batteryLevel');

    queryInterface.removeColumn(
      'tracking_day',
      'batteryStatus');

    queryInterface.removeColumn(
      'tracking_day',
      'batteryTemperature');
    }
};