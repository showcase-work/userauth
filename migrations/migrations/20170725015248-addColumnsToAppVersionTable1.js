'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn({
        tableName: 'appversion'
      },
      'createdAt',
      Sequelize.DATE
    );
    queryInterface.addColumn({
        tableName: 'appversion'
      },
      'updatedAt',
      Sequelize.DATE
    );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'appversion',
      'updatedAt');
    queryInterface.removeColumn(
      'appversion',
      'createdAt');
  }
};
