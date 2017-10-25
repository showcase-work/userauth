"use strict";
let Sequelize = require("sequelize");

module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;

    var Company = sequelize.define("company", 
    {   
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

    function createCompany(params){
        return Company.create({name:params.name, details:params.details});
    }

    function getAllCompanies(){
        return Company.findAll();
    }

    function deleteCompany(id){
        return Company.destroy({
            where:{
                id:id
            }
        })
    }


    return {
        Company,
        createCompany,
        getAllCompanies,
        deleteCompany
    };
};
