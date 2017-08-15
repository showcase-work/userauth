"use strict";

module.exports = app => {
    let userController = app.controllers.userController;

    
    app.use("/login", app.routes.login);

    app.get("/", userController.authenticateAndAttachUser, (req,res,next)=>{     
        if(req.user){
            res.redirect("/user");
        }
        else
        {
            res.redirect("/login");
        }
    })

    app.use("/signup", app.routes.signup);
    
    app.use("/api", app.routes.api);

    app.use("/main", app.routes.main);

    app.use("/app-version", app.routes.version);

    app.use("/user", app.routes.user);

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