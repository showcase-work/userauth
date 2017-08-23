"use strict";

module.exports = app => {
    let apiService = app.services.apiService;

    function addLocTrackerDetails(data){

        apiService.addLocTrackerDetails(data);
    }

    function getLayer(req,res,next){
        apiService.getLayer(req.query).then(data=>{
            res.send(data);
        }).catch(err=>{
            console.log(err);
        })
    }

    function getLayerWithQuery(req,res,next){
        apiService.getLayerWithQuery(req.query).then(data=>{
            res.send(data);
        }).catch(err=>{
            console.log(err);
        })
    }

    function getTruckPicture(req,res,next){
        apiService.getTruckPicture(req.body.IMEI).then(data=>{
            res.send(data);
        }).catch(err=>{
            console.log(err);
            next(err);
        })
    }

    function getTitleLayer(req,res,next){
        apiService.getTitleLayer(req,res,next)
    }


    return {
        addLocTrackerDetails,
        getLayer,
        getLayerWithQuery,
        getTruckPicture,
        getTitleLayer
    };
};