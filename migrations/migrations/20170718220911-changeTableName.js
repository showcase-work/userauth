'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.renameTable('loctracker', 'tracking_day');
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.renameTable('tracking_day','loctracker');
    
      /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
