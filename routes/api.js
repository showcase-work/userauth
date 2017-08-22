"use strict";

let router = require("express").Router();
//drongeic.mx:6080/arcgis/rest/services/vehiculos/caminos/FeatureServer/0

module.exports = app => {
    let apiController = app.controllers.apiController;

    router.route('/layer/').get((req,res,next)=>{
        apiController.getLayer(req,res,next);
        //return res.render("main");
    });

    router.route('/layer/query').get((req,res,next)=>{
        apiController.getLayerWithQuery(req,res,next);
        //return res.render("main");
    });

    router.route('/truck-picture').post((req,res,next)=>{
        console.log(req.body);
        apiController.getTruckPicture(req,res,next);
    })

    
    return router;
};


