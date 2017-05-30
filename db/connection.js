"use strict";

module.exports = app => {
    let Sequelize = require("sequelize");
    let config = app.config.envVariables;

  // let userModel = app.models.user.UserModelSchema;

    //var sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, config.mysql.options);
    var sequelize = new Sequelize(config.postgressql.database, config.postgressql.username, config.postgressql.password, { username: config.postgressql.username,
     password: config.postgressql.password,
     database: config.postgressql.database,
     host: config.postgressql.host,
     dialect: 'postgres',
     port: config.postgressql.port });

    return sequelize;
};

