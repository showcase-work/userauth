"use strict";

module.exports = app => {
    let companyService = app.services.companyService;

    function createCompany(req,res,next){
        console.log("working in create company");
        companyService.createCompany(req.body).then(data=>{
            res.redirect("/company");
        }).catch(err=>{
            console.log(err);
            next(err);
        })
    }

    function getAllCompanies(req,res,next){
        companyService.getAllCompanies().then(data=>{
            console.log(data);
            res.render("companies",{companies:data});
        }).catch(err=>{
            console.log(err);
            next(err);
        })
    }

    function deleteCompany(req,res,next){
        companyService.deleteCompany(req.body.id).then(data=>{
            res.send(true);
        }).catch(err=>{
            console.log(err);
            next(err);
        })
    }


    return {
        createCompany,
        getAllCompanies,
        deleteCompany
    }
}