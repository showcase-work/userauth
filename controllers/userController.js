"use strict";

module.exports = app => {
    let tokenService = app.services.tokenService;
    let userService = app.services.userService;

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
                    res.redirect("main");
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
        userService.getAllUsers().then(data=>{
            res.send(data);
            //return res.render("users",{users:data});
        }).catch(err=>{
            return reject(err);
        })
    }

    function deleteUser(req,res,nexr){
        User.deleteUser(req.query.id).then(data=>{
            return resolve(data);
        }).catch(err=>{
            return reject(err);
        })
    }

    

    return {
        authenticateAndAttachUser,
        createAccount,
        getAllUsers,
        deleteUser
    };
};