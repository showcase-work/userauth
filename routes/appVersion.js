"use strict";

let router = require("express").Router();

module.exports = app => {
    let appVersionController = app.controllers.appVersionController;

    router.route('/').get((req,res,next)=>{
        return appVersionController.getLatestAppVersion(req,res,next);
    });

    router.route('/').post((req,res,next)=>{
        return appVersionController.updateAppVersion(req,res,next);
    });

    return router;
};


