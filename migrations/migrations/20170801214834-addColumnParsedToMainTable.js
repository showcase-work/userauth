'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn({
        tableName: 'tracking_day',
        schema: 'sde'
      },
      'parsed',
      Sequelize.INTEGER
    );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'tracking_day',
      'parsed');
  }
};
