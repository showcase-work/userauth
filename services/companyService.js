"use strict";

module.exports = app => {
    let company = app.models.company;

    function createCompany(data){
        return new Promise((resolve,reject)=>{
            company.createCompany(data).then(details=>{
                return resolve(details);
            }).catch(err=>{
                return reject(err);
            })
        })
    }

    function getAllCompanies(){
        return new Promise((resolve,reject)=>{
            company.getAllCompanies().then(details=>{
                return resolve(details);
            }).catch(err=>{
                return reject(err);
            })
        })
    }

    function deleteCompany(id){
        return new Promise((resolve,reject)=>{
            company.deleteCompany(id).then(details=>{
                return resolve(details);
            }).catch(err=>{
                return reject(err);
            })
        })
    }


    return {
        createCompany,
        getAllCompanies,
        deleteCompany
    }
}