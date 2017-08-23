"use strict";

let request = require('request').defaults({ encoding: null });

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

    function getLayer(qs){
        return new Promise((resolve,reject)=>{
            request({url:'http://drongeic.mx:6080/arcgis/rest/services/vehiculos/caminos/FeatureServer/0/',qs:qs}, function (error, response, body) {
              
              return resolve(body);
            });
        })
    }

    function getLayerWithQuery(qs){
        return new Promise((resolve,reject)=>{
            request({url:'http://drongeic.mx:6080/arcgis/rest/services/vehiculos/caminos/FeatureServer/0/query',qs:qs}, function (error, response, body) {
             
              return resolve(body);
            });
        })
    }

    function getTruckPicture(IMEI){
        return new Promise((resolve,reject)=>{
            request({url:'http://drongeic.mx:8080/movilidad/get_placa.php',qs:{imei:IMEI}}, function (error, response, body) {
                console.log(IMEI)
                console.log("working here")
                console.log(error);
              return resolve(body);
            });
        })
    }

    function getTitleLayer(req, res, next){
        
        var qs = req.query;
        var params = req.params;
        console.log('http://drongeic.mx:6080/arcgis/rest/services/vehiculos/vuelo_drone_julio2017/MapServer/'+params["0"]);
            request({url:'http://drongeic.mx:6080/arcgis/rest/services/vehiculos/vuelo_drone_julio2017/MapServer/'+params["0"], qs}, function (error, response, body) { 
                //console.log(response.headers['content-type']);
                //return resolve({body:body ,header:response.headers['content-type']});
                    res.header("Content-Type", response.headers['content-type']);
                    res.send(body);
            })
    }

    return {
        addLocTrackerDetails,
        getLayer,
        getLayerWithQuery,
        getTruckPicture,
        getTitleLayer
    };
};