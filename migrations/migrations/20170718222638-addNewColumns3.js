'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    
    /*queryInterface.addColumn(
      'tracking_day',
      'shape',
      {
        type: Sequelize.GEOMETRY('POINT'),
        allowNull: true
      }
    );*/
    queryInterface.addColumn(
      'tracking_day',
      'identificador',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    );
    queryInterface.addColumn(
      'tracking_day',
      'parsed',
      {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    );
    queryInterface.addColumn(
      'tracking_day',
      'alert',
      {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    );

  },

  down: function (queryInterface, Sequelize) {

    queryInterface.removeColumn(
      'tracking_day',
      'shape');
    queryInterface.removeColumn(
      'tracking_day',
      'identificador');
    queryInterface.removeColumn(
      'tracking_day',
      'parsed');
    queryInterface.removeColumn(
      'tracking_day',
      'alert');

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
