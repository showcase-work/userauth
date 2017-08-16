"use strict";

module.exports = app => {
    let apiController = app.controllers.apiController;
    let http = require('http').Server(app);
    let io = require('socket.io')(http);

    var allSocketsObject = {}; 
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

    });

    return {
        http
    };

    
};











