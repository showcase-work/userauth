"use strict";

module.exports = app => {
    let apiController = app.controllers.apiController;
    let http = require('http').Server(app);
    let io = require('socket.io')(http);

    var allSocketsObject = {}; 
    var allSockets = {};

    io.on('connection', function(socket){
        
        console.log("user connected");

        if(!(socket.id in allSocketsObject)){
            io.emit('updateObjectDetailsForBrowsers', allSocketsObject);
        }
        
        socket.on('disconnect', function(){
            if(socket.id in allSocketsObject){
                console.log("mobile disconnected");
                delete allSocketsObject[socket.id];
                io.emit('updateObjectDetailsForBrowsers', allSocketsObject);
            }
        });

        socket.on('updateDetails', function(data){

            for (var key in allSocketsObject) {
              if (allSocketsObject.hasOwnProperty(key)) {
                if(allSocketsObject[key].IMEI==data.IMEI){
                    console.log("same key detected");
                    delete allSocketsObject[key];
                }
              }
            }
            
            console.log("update app details");
            allSocketsObject[socket.id] = data;
            io.emit('updateObjectDetailsForBrowsers', allSocketsObject);
            apiController.addLocTrackerDetails(data);
        });

        socket.on('initialDetails', function(data){
            allSockets[data.IMEI]=socket;
        });

        socket.on('getLocation', function(data){
            if(allSockets[data.IMEI]){
                console.log("getting location of "+data.IMEI);
                io.to(allSockets[data.IMEI].id).emit('getLocation', '');
            }
        });

        socket.on('finishSession', function(data){
            for (var key in allSocketsObject) {
              if (allSocketsObject.hasOwnProperty(key)) {
                if(allSocketsObject[key].IMEI==data.IMEI){

                    delete allSocketsObject[key];
                }
              }
            }
            io.emit('updateObjectDetailsForBrowsers', allSocketsObject);
        });

    });

    return {
        http
    };

    
};











