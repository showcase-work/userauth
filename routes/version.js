"use strict";

let router = require("express").Router();
let multer = require("multer");
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname);
  }
})
let upload = multer({ storage: storage });

module.exports = app => {
    let appVersionController = app.controllers.versionController;

    router.route('/').get((req,res,next)=>{
        return appVersionController.getLatestAppVersion(req,res,next);
    });

    router.route('/').post((req,res,next)=>{
        return appVersionController.updateAppVersion(req,res,next);
    });

    router.route('/register').get((req,res,next)=>{
        res.render("appversion");
        return appVersionController.updateAppVersion(req,res,next);
    });

    router.route('/register').post(upload.single('filetoupload'), (req,res,next)=>{
        return appVersionController.updateAppVersion(req,res,next);
    })

    router.route('/download').get((req,res,next)=>{
        console.log("workig in here");
        return appVersionController.downloadLatestVersion(req,res,next);
    })

    return router;
};


