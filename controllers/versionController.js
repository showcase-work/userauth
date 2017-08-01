"use strict";

let path = require('path');
let mime = require('mime');

module.exports = app => {
    let appVersionService = app.services.versionService;

    function updateAppVersion(req,res,next){
        console.log("wokring in updating app version");
        console.log(req.body, req.file.filename);
        appVersionService.updateAppVersion(req.body, req.file.filename).then((data)=>{
            res.send(data);
        }).catch(err=>{
            next(err);
        })
    }

    function getLatestAppVersion(req,res,next){
        appVersionService.getLatestAppVersion().then(data=>{
            console.log("wokring in herre");
            res.send(data[0]);
        }).catch(err=>{
            console.log("error coming");
            console.log(err);
            next(err);
        })
    }

    function downloadLatestVersion(req,res,next){
        appVersionService.getLatestAppVersion().then(data=>{
            console.log("workign in download");
            console.log(data);
            var file = __dirname + '/../uploads/'+data[0].path;
            console.log("file is "+file)
            var filename = path.basename(file);
            console.log("filename is "+filename)
            var mimetype = mime.lookup(file);
            console.log("mimetype is "+mimetype);

            res.download(file);
            /*res.setHeader('Content-disposition', 'attachment; filename=' + filename);
            res.setHeader('Content-type', mimetype);*/
            /*var filestream = fs.createReadStream(file);
            filestream.pipe(res);*/
            //res.setHeader('Content-disposition', 'attachment; filename='+data.path);
        })
    }

    return {
        updateAppVersion,
        getLatestAppVersion,
        downloadLatestVersion
    };
};