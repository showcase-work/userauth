"use strict";
let request = require("request");
module.exports = app => {
    let errorFormatter = app.helpers.errorFormatter;
    let logger = app.helpers.logger;
    let User = app.models.user;
    
   

    function getme(id) {
        return new Promise((resolve,reject)=>{
            console.log("working in getme");
            User.getme(id).then(user=>{
                console.log("got user");
                return resolve(user);
            });
        }) 
    }

    
    function createUser(params){
        return new Promise((resolve,reject)=>{
            User.createNewuser(params).then(data=>{
                return resolve(data);
            }).catch(err=>{
                return reject(err);
            });
        })
    }

    function getAllUsers(){
        return new Promise((resolve,reject)=>{
            User.getAllUsers().then(data=>{
                return resolve(data);
            }).catch(err=>{
                return reject(err);
            })
        })
    }

    function deleteUser(id){
        return new Promise((resolve,reject)=>{
            User.deleteUser(id).then(data=>{
                return resolve(data);
            }).catch(err=>{
                return reject(err);
            })
        })
    }


    return {
        getme,
        createUser,
        getAllUsers,
        deleteUser
    };
};