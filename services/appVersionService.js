"use strict";


module.exports = app => {

    let AppVersion = app.models.AppVersion;

    function updateAppVersion(details){
            console.log(details);
            return new Promise((resolve,reject)=>{
                AppVersion.updateAppVersion(details).then((data)=>{
                return resolve(data);
            }).catch(err=>{
                console.log("error");
                console.log(err);
                return reject(err);
            })
        })
        
    }

    function getLatestAppVersion(){
            return new Promise((resolve,reject)=>{
                AppVersion.getLatestAppVersion().then(data=>{
                return resolve(data);
            }).catch(err=>{
                return reject(err);
            })
        })
        
    }

    return {
        updateAppVersion,
        getLatestAppVersion
    };
};