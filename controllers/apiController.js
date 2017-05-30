"use strict";

module.exports = app => {
    let apiService = app.services.apiService;

    function addLocTrackerDetails(data){

        apiService.addLocTrackerDetails(data);
    }

    

    return {
        addLocTrackerDetails
    };
};