"use strict";

let router = require("express").Router();

module.exports = app => {
    let userController = app.controllers.userController;

    router.route('/').get((req,res,next)=>{
        userController.renderSignup(req,res,next);
    });


    router.route('/').post((req,res,next)=>{
        return userController.createAccount(req,res,next);
    });

    
    return router;
};


