"use strict";
let express = require("express");
let consign = require("consign");
let logger = require("winston");
let app = express();



let appPort = /*process.env.PORT || */"8080";
consign()
    .include("./helpers")
    .then("./middlewares/basicSettings.js")
    .then("./config")
    .then("./db/connection.js")
    .then("./middlewares/staticResources.js")
    .then("./models/user.js")
    .then("./models")
    .then("./auth/passport.js")
    .then("./services")
    .then("./controllers")
    .then("./routes")
    .then("./middlewares/mainRoutes.js")
    .then("./middlewares/errorHandler.js")
    .then("./middlewares/socket.js")
    .into(app);

let http = app.middlewares.socket.http;
http.listen(appPort, () => {
    logger.info(`Server started on port ${appPort}`);
});

module.exports = app;