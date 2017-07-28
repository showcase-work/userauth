"use strict";
let Sequelize = require("sequelize");

module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;

    var AppVersion = sequelize.define("appversion", 
    {   
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

 
    function updateAppVersion(params){
        console.log(params);
        console.log(params.version);
            return AppVersion.create({
                version:params.version,
                versionName:params.versionName, 
                details:params.details
            });
    }

    function getLatestAppVersion(){
        return AppVersion.findAll({
            limit: 1,
            order: [ [ 'createdAt', 'DESC' ]]
        })
    }



    return {
        updateAppVersion,
        getLatestAppVersion
    };
};
