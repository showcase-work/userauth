"use strict";

module.exports = app => {
    let apiService = app.services.apiService;

    function addLocTrackerDetails(data){

        apiService.addLocTrackerDetails(data);
    }

    function getLayer(req,res,next){
        apiService.getLayer().then(data=>{
            res.send(data);
        }).catch(err=>{
            console.log(err);
        })
    }

    

    return {
        addLocTrackerDetails,
        getLayer
    };
};