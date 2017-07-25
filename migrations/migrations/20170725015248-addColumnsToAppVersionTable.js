'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn({
        tableName: 'appversion',
        schema: 'sde'
      },
      'createdAt',
      Sequelize.DATE
    );
    queryInterface.addColumn({
        tableName: 'appversion',
        schema: 'sde'
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
