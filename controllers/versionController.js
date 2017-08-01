"use strict";

module.exports = app => {
    let appVersionService = app.services.versionService;

    function updateAppVersion(req,res,next){
        console.log("wokring in updating app version");
        console.log(req.body);
        appVersionService.updateAppVersion(req.body).then((data)=>{
            res.send(data);
        }).catch(err=>{
            next(err);
        })
    }

    function getLatestAppVersion(req,res,next){
        appVersionService.getLatestAppVersion().then(data=>{
            console.log("wokring in herre");
            res.send(data[0]);
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