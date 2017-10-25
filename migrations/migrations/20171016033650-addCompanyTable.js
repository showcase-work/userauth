'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('company', {

      
      id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
            name: {
            type: Sequelize.STRING
        },  
            details: {
            type: Sequelize.TEXT
        }
      },
      {
          tableName: "company",
          timestamps: false
      });  


      queryInterface.addColumn({
          tableName: 'users'
        },
        'company_id',
        Sequelize.INTEGER
      ); 


  },



  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('company');
    queryInterface.removeColumn(
      'users',
      'company_id');
  }
};
