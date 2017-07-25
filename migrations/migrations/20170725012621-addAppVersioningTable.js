'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('appversion', {
      id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
            version: {
            type: Sequelize.STRING
        },  
            versionName: {
            type: Sequelize.STRING
        },
            details: {
            type: Sequelize.STRING,
            allowNull: true,
        }
      },
      {
          tableName: "appversion",
          timestamps: true
      });

    queryInterface.bulkInsert('time_zones', [
      {
        versionName: '1.0',
        version: '1',
        details:"First App"
      }
    ]);    

  },



  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('appversion');
  }
};
