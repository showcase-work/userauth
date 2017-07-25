"use strict";
let Sequelize = require("sequelize");
let bcrypt = require('bcrypt-nodejs');
let SALT_WORK_FACTOR = 12;
module.exports = app => {

    let sequelize = app.db.connection;
    let logger = app.helpers.logger;
    let errorFormatter = app.helpers.errorFormatter;

    var LocTracker = sequelize.define("loctracker", {  
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
            velocity: {
            type: Sequelize.STRING
        },
            longitude: {
            type: Sequelize.STRING
        },
            latitude: {
            type: Sequelize.STRING
        },
            bearing: {
            type: Sequelize.STRING
        },
            imei: {
            type: Sequelize.STRING
        },
            createdAt: {
            type: Sequelize.DATE
        },
            updatedAt: {
            type: Sequelize.DATE
        },
            identificador:{
                type: Sequelize.STRING
        },
            parsed:{
                type: Sequelize.INTEGER
        },
            alert:{
                type: Sequelize.INTEGER
        },
            shape:{
                type: Sequelize.GEOMETRY('POINT')
        },
            batteryLevel:{
                type: Sequelize.STRING
        },
            batteryStatus:{
                type: Sequelize.STRING
        },
            batteryTemperature:{
                type: Sequelize.STRING
        }

    },
    {
        tableName: "tracking_day",
        timestamps: true
    });

    


 
    function putDetails(params){
            return LocTracker.create({
                imei:params.IMEI,
                velocity:params.velocity, 
                longitude:params.longitude,
                bearing:params.bearing, 
                latitude:params.latitude,
                batteryLevel:params.batteryLevel,
                batteryStatus:params.batteryStatus,
                batteryTemperature:params.batteryTemperature
            });
    }



    return {
        LocTracker,
        putDetails
    };
};
