"use strict";

module.exports = app => {
    let userController = app.controllers.userController;

    app.use("/login", app.routes.login);


    app.get("/authenticate", userController.authenticateAndAttachUser, (req,res,next) => {
        res.send(true);
        //return res.render("discover/discover", {title:"User Authentication", user:req.user});
    })


    app.get('/logout', function(req,res,next){
        res.clearCookie("token");
        res.send("logged out");
        //res.redirect('/');
    })

    
};