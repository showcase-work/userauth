"use strict";


module.exports = app => {

    let LocTracker = app.models.LocTracker;

    function addLocTrackerDetails(details){
        console.log(details);
        LocTracker.putDetails(details).then((data)=>{
        }).catch(err=>{
            console.log("error");
            console.log(err);
        })
    }

    return {
        addLocTrackerDetails
    };
};