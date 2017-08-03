"use strict";

module.exports = app => {
    let Sequelize = require("sequelize");
    let config = app.config.envVariables;

  // let userModel = app.models.user.UserModelSchema;

    //var sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, config.mysql.options);
    var sequelize = new Sequelize(config.mssql.database, config.mssql.username, config.mssql.password, 
        config.mssql);

    return sequelize;
};

