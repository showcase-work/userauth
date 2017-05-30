"use strict";

let router = require("express").Router();

module.exports = app => {
    let userController = app.controllers.userController;

    router.route('/').get((req,res,next)=>{
        return res.render("signup");
    });


    router.route('/').post((req,res,next)=>{
        return userController.createAccount(req,res,next);
    });

    
    return router;
};


