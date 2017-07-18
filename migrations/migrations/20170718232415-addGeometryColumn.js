'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    queryInterface.addColumn({
        tableName: 'tracking_day',
        schema: 'sde'
      },
      'shape',
      Sequelize.GEOMETRY('POINT')
    );
  },

  down: function (queryInterface, Sequelize) {

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    queryInterface.removeColumn(
      'tracking_day',
      'shape');
  }
};
