/*
 *  Copyright (C) MotionSoft Consulting SRL, Inc - All Rights Reserved
 *  Unauthorized copying, modify o redistribution of this file, via any medium is strictly prohibited
 *  Proprietary and confidential.
 */
var util = require('util');

function FileSysUtils(){

    this.getFilesInDir = function(dirPath,horasModif, callback){
        var fs = require('fs');
        fs.readdir(dirPath, function(err, files){
            if (err){
                callback(err);
                return;
            }
            if (horasModif === 0){
                callback(null,files);
                return;
            }
            var result = [];
            var index = 0;
            if (dirPath[dirPath.lenght-1] !== '/')
                dirPath= dirPath.concat('/');
            files.forEach(function(file){
                var dateFile= new Date(util.inspect(fs.statSync(dirPath + file).mtime));
                var actDate = new Date();
                var auxDate = actDate.getTime();

                auxDate -= (horasModif * 60 * 60 * 1000);
                limiteModif = new Date(auxDate);
                if (dateFile >= limiteModif){
                    result[index]= file;
                    index++;
                }
            });
            callback(null,result);
        });
    };

    this.getFilesInDirSync = function(dirPath,horasModif, callback){
        var fs = require('fs');
        var files= fs.readdirSync(dirPath);
        if (horasModif === 0){
            callback(null,files);
            return;
        }
        var result = [];
        var index = 0;
        if (dirPath[dirPath.lenght-1] !== '/')
            dirPath= dirPath.concat('/');
        files.forEach(function(file){
            var dateFile= new Date(util.inspect(fs.statSync(dirPath + file).mtime));
            var actDate = new Date();
            var auxDate = actDate.getTime();

            auxDate -= (horasModif * 60 * 60 * 1000);
            limiteModif = new Date(auxDate);
            if (dateFile >= limiteModif){
                result[index]= file;
                index++;
            }
        });
        callback(null,result);
    };


}

module.exports= new FileSysUtils();