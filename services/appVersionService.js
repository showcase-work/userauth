"use strict";


module.exports = app => {

    let AppVersion = app.models.AppVersion;

    function updateAppVersion(details){
        
        AppVersion.updateAppVersion(details).then((data)=>{
            return Promise.resolve(data);
        }).catch(err=>{
            console.log("error");
            console.log(err);
        })
    }

    function getLatestAppVersion(){
        AppVersion.getLatestAppVersion().then(data=>{
            return Promise.resolve(data);
        })
    }

    return {
        updateAppVersion,
        getLatestAppVersion
    };
};