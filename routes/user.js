"use strict";

let router = require("express").Router();

module.exports = app => {
    let userController = app.controllers.userController;

    router.route('/create').post((req,res,next)=>{
        return userController.createAccount(req,res,next);
    });

    router.route('/').get((req,res,next)=>{
        return userController.getAllUsers(req,res,next);
    });

    router.route('/delete').post((req,res,next)=>{
        console.log(req.query);
        console.log(req.body);
        return userController.deleteUser(req,res,next);
    });

    return router;
};


