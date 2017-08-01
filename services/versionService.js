"use strict";


module.exports = app => {

    let AppVersion = app.models.Version;

    function updateAppVersion(details,path){
            console.log(details,path);
            return new Promise((resolve,reject)=>{
                AppVersion.updateAppVersion(details, path).then((data)=>{
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