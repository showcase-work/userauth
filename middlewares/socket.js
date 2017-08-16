"use strict";

module.exports = app => {
    let apiController = app.controllers.apiController;
    let http = require('http').Server(app);
    let io = require('socket.io')(http);


    var allSockets = []; 
    var allSocketsObject = {}; 
    var dataForBrowsers = [];
    io.on('connection', function(socket){
        
        console.log("user connected");
        /*var index = allSockets.indexOf(socket);*/

        /*if(!(socket.IMEI in obj)){
            allSocketsObject[socket.IMEI] = socket;
            io.emit('updateObjectDetailsForBrowsers', allSocketsObject);
        }
        if(index<0){
            io.emit('updateDetailsForBrowsers', dataForBrowsers);
        }*/


        socket.on('disconnect', function(){
            console.log('user disconnected');


            if(socket.IMEI in allSocketsObject){
                console.log("mobile disconnected");
                delete allSocketsObject[socket.IMEI];
                io.emit('updateObjectDetailsForBrowsers', allSocketsObject);
            }
            else
            {
                console.log("browser disconnected");
            }

            var index = allSockets.indexOf(socket);
            if(index>-1){
                allSockets.splice(index,1);
                var index2 = dataForBrowsers.indexOf(socket.mobileData);
                dataForBrowsers.splice(index2,1);
                io.emit('updateDetailsForBrowsers', dataForBrowsers);
            }
        });

        socket.on('updateDetails', function(data){
            console.log("updating app details");

            allSocketsObject[socket.IMEI] = data;
            console.log("all sockets data");
            console.log(allSocketsObject);
            console.log("-----");
            io.emit('updateObjectDetailsForBrowsers', allSocketsObject);


            socket.mobileData=data;
            var index = allSockets.indexOf(socket);
            console.log(index);
            console.log(data);
            if(index<0){
                allSockets.push(socket);
                dataForBrowsers.push(data);
            }
            else
            {
                dataForBrowsers[index] = data;
            }

           
            apiController.addLocTrackerDetails(data);
            io.emit('updateDetailsForBrowsers', dataForBrowsers);
        });
    });

    return {
        http
    };

    
};











