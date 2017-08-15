"use strict";

let router = require("express").Router();
//drongeic.mx:6080/arcgis/rest/services/vehiculos/caminos/FeatureServer/0

module.exports = app => {
    let apiController = app.controllers.apiController;

    router.route('/layer').get((req,res,next)=>{
        apiController.getLayer(req,res,next);
        //return res.render("main");
    });

    
    return router;
};


