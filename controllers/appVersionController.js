"use strict";

module.exports = app => {
    let appVersionService = app.services.appVersionService;

   

    function updateAppVersion(req,res,next){
        
        appVersionService.updateAppVersion(req.body).then((data)=>{
            res.send(data);
        }).catch(err=>{
            next(err);
        })
    }

    function getLatestAppVersion(req,res,next){
        appVersionService.getLatestAppVersion().then(data=>{
            res.send(data);
        }).catch(err=>{
            console.log("error coming");
            console.log(err);
            next(err);
        })
    }

    

    return {
        updateAppVersion,
        getLatestAppVersion
    };
};