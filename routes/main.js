"use strict";

let router = require("express").Router();

module.exports = app => {
    let userController = app.controllers.userController;

    router.route('/').get((req,res,next)=>{
        console.log(req.user);
        return res.render("main");
    });

    
    return router;
};


