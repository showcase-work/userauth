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
    queryInterface.addColumn({
        tableName: 'tracking_day',
        schema: ''
      },
      'identificador',
      Sequelize.STRING
    )
    queryInterface.addColumn({
        tableName: 'tracking_day',
        schema: ''
      },
      'parsed',
      Sequelize.INTEGER
    )
    queryInterface.addColumn({
        tableName: 'tracking_day',
        schema: ''
      },
      'alert',
      Sequelize.INTEGER
    )
    

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
