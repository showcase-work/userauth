"use strict";

module.exports = app => {
    let tokenService = app.services.tokenService;
    let userService = app.services.userService;
    let companyService = app.services.companyService;

    function authenticateAndAttachUser(req,res,next) {
        console.log(req.headers.authorization);
        if(req.headers.authorization && req.headers.authorization != undefined){
            tokenService.authenticate(req.headers.authorization)
            .then(payload=>{
                return userService.getme(payload.id)
            })
            .then(user => {
                next();
            }).catch(err => res.send(false));
        }
        else
        {
            //res.send(false);
            next();
        }
    }

    function createAccount(req,res,next){
        if(req.body.username && req.body.password){
            userService.createUser(req.body).then((data)=>{
                if(data){
                    console.log(data);
                    res.redirect("/user");
                }
                //res.send(data);
            }).catch(err=>{
                console.log(err);
                next(err);
            })
        }
        else
        {
            res.render("signup",{error:{message:"parameters not set properly"}});
        }
        
    }


    function getAllUsers(req,res,next){
        var objectToSend = {users:null,company:null};
        userService.getAllUsers().then(data=>{
            objectToSend.users=data;
            companyService.getAllCompanies().then(companies=>{
                objectToSend.company=companies;
                console.log(objectToSend);
                res.render("users",objectToSend);
            }).catch(err=>{
                console.log("herhehehhe");
                console.log(err);
                next(err);
            })
            //return res.render("users",{users:data});
        }).catch(err=>{
            console.log("no one")
            console.log(err);
            next(err);
        })
    }

    function deleteUser(req,res,nexr){
        userService.deleteUser(req.body.id).then(data=>{
            res.send(true);
        }).catch(err=>{
            next(err);
        })
    }

    function getAllUsersAndRenderPage(req,res,next){
        userService.getAllUsers().then(data=>{
            res.send(data);
            //return res.render("users",{users:data});
        }).catch(err=>{
            console.log(err);
            next(err);
        })
    }

    function renderSignup(req,res,next){
        companyService.getAllCompanies().then(data=>{
            console.log(data);
            res.render("signup", {company:data});
        })
    }

    return {
        authenticateAndAttachUser,
        createAccount,
        getAllUsers,
        deleteUser,
        getAllUsersAndRenderPage,
        renderSignup
    };
};