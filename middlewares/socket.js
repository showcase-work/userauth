"use strict";

module.exports = app => {
    let apiController = app.controllers.apiController;
    let http = require('http').Server(app);
    let io = require('socket.io')(http);

    var allSocketsObject = {}; 
    var allSockets = {};

    io.on('connection', function(socket){
        
        console.log("user connected");
        socket.on('disconnect', function(){
            for (var key in allSocketsObject) {
              if (allSocketsObject.hasOwnProperty(key)) {
                var obj = allSocketsObject[key];
                if(socket.id in obj){
                    console.log("mobile disconnected");
                    delete obj[socket.id];
                    //io.emit('updateObjectDetailsForBrowsers', allSocketsObject);
                    io.to(key).emit('updateObjectDetailsForBrowsers', obj);
                }
              }
            }            
        });

        socket.on('updateDetails', function(data){
            console.log("update Details");
            console.log("data is");
            console.log(data);
            console.log(String(data.company));
            data.velocity = parseInt(data.velocity)*3.6;
            var detailsObj = allSocketsObject[String(data.company)];
            console.log(detailsObj);
            console.log("is the all sockets object of the company");
            if(!allSocketsObject[String(data.company)]){
                allSocketsObject[String(data.company)] = {};
            }
            for (var key in allSocketsObject[String(data.company)]) {
              if (allSocketsObject[String(data.company)].hasOwnProperty(key)) {
                if(allSocketsObject[String(data.company)][key].IMEI==data.IMEI){
                    console.log("same key detected");
                    delete allSocketsObject[String(data.company)][key];
                }
              }
            }
            
            console.log("update app details");
            allSocketsObject[String(data.company)][socket.id] = data;
            console.log(allSocketsObject);
            //io.emit('updateObjectDetailsForBrowsers', allSocketsObject);
            console.log(detailsObj);
            console.log("====");
            io.to(String(data.company)).emit('updateObjectDetailsForBrowsers', allSocketsObject[String(data.company)]);
            apiController.addLocTrackerDetails(data);

        });

        socket.on('browserConnect', function(data){
            console.log("browser");
            console.log(data);
            var company_id = data.company;
            socket.join(String(company_id));
            console.log(allSocketsObject);
            console.log(String(company_id));
            console.log(allSocketsObject[String(company_id)]);
            io.to(String(company_id)).emit('updateObjectDetailsForBrowsers', allSocketsObject[String(company_id)]);
            console.log("browser connected to company id" + company_id);
            //socket.join('browsers');
            //io.to('browsers').emit('updateObjectDetailsForBrowsers', allSocketsObject);
        })

        socket.on('initialDetails', function(data){
            console.log(data);
            console.log("adding to initial Details");
            allSockets[data.IMEI]=socket;

        });

        socket.on('getLocation', function(data){
            console.log(allSockets);
            console.log(data);
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
            //io.emit('updateObjectDetailsForBrowsers', allSocketsObject);
            io.to('browsers').emit('updateObjectDetailsForBrowsers', allSocketsObject);
        });

    });

    return {
        http
    };

    
};











