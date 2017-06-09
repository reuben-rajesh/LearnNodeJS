'use strict';
var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, ext, callback)
{
    ext = "." + ext;
    fs.readdir(dirPath, function (err, files) {
    if(err) {
        return callback(err);
    }

    var filteredFiles = files.filter(function (file) {
        return path.extname(file) === ext
    })

    /*
    files.forEach(function(file) {          
        if(path.extname(file) == ext) {
            filteredFiles.push(file);
        }
    }, this);   */
    
    callback(null, filteredFiles);
    });
}
