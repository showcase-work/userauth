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
        },
            path:{
                type:Sequelize.STRING,

        }
    },
    {
          tableName: "appversion",
          timestamps: true
    });

 
    function updateAppVersion(params, path){
            return AppVersion.create({
                version:params.version,
                versionName:params.versionName, 
                details:params.details,
                path:path
            });
    }

    function getLatestAppVersion(){
        return AppVersion.findAll({
            limit: 1,
            raw: true,
            order: [ [ 'createdAt', 'DESC' ]]
        })
    }



    return {
        updateAppVersion,
        getLatestAppVersion
    };
};
