"use strict";

let router = require("express").Router();

module.exports = app => {
    let companyController = app.controllers.companyController;

    router.route('/create').post((req,res,next)=>{
        return companyController.createCompany(req,res,next);
    });

    router.route('/').get((req,res,next)=>{
        return companyController.getAllCompanies(req,res,next);
    });

    router.route('/delete').post((req,res,next)=>{
        return companyController.deleteCompany(req,res,next);
    });

    return router;
};


