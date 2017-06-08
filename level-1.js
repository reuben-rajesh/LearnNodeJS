'use strict';

//---------------- CHALLENGE #1 -------------------
//console.log("HELLO WORLD");

//---------------- CHALLENGE #2 -------------------
/*
var sum = 0;
for (var index = 2; index < process.argv.length; index++) {
    sum += +process.argv[index];    
}

console.log(sum);
*/

//---------------- CHALLENGE #3 -------------------
/*
var fs = require('fs');
var len = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
console.log(len);
*/

//---------------- CHALLENGE #4 -------------------
/*
var fs = require('fs');

var len = 0;

fs.readFile(process.argv[2], 'utf8', (err,data) => {
    console.log(data.split('\n').length - 1);
});
//console.log("async called");
*/

//---------------- CHALLENGE #4 -------------------

var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(dirPath, 'utf8', (err, files) => {    
    if(err != null) {
        return console.error(err);
    }
    files.forEach(function(file) {
        //console.log(path.extname(file));
        if(path.extname(file) == ext) {
            console.log(file);
        }
    }, this);
});