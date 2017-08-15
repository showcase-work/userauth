"use strict";

let request = require('request');

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

    function getLayer(){
        return new Promise((resolve,reject)=>{
            request('drongeic.mx:6080/arcgis/rest/services/vehiculos/caminos/FeatureServer/0', function (error, response, body) {
              console.log('error:', error); // Print the error if one occurred 
              console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
              console.log('body:', body); // Print the HTML for the Google homepage. 
              return resolve(body);
            });
        })
    }

    return {
        addLocTrackerDetails,
        getLayer
    };
};