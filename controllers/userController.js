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
            res.send(false);
            //next();
        }
    }

    function unlinkAccount(req,res,next,account){
        var userId = req.user.id;
        userService.unlinkAccount(account,userId).then((data)=>{
            res.send(true);
        })
    }

    

    return {
        authenticateAndAttachUser,
        unlinkAccount
    };
};