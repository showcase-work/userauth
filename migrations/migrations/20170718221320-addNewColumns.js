'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    queryInterface.addColumn(
     'tracking_day',
      'shape',
      "Sequelize.GEOMETRY('POINT')");

    queryInterface.addColumn(
     'tracking_day',
      'identificador',
      "Sequelize.STRING");

    queryInterface.addColumn(
     'tracking_day',
      'parsed',
      "Sequelize.INTEGER");

    queryInterface.addColumn(
     'tracking_day',
      'alert',
      "Sequelize.INTEGER");
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
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
