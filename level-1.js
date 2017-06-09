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

//---------------- CHALLENGE #5 -------------------
/*
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
*/

//---------------- CHALLENGE #6 -------------------
/*
var mods = require('./level-1-mod.js')

var dirPath = process.argv[2];
var ext = process.argv[3];

mods(dirPath, ext, function(err, files)
{
    if(err) {
        return console.log(err);
    }
    
    files.forEach(function(file) {        
            console.log(file);
    }, this);
    
});
*/

//---------------- CHALLENGE #7 -------------------
/*
var http = require('http');

var url = process.argv[2];

var req = http.get(url , function(res){
    res.setEncoding('utf8');
    res.on('data', console.log);
    res.on('error', console.error);    
}).on('error', console.error);
*/

//---------------- CHALLENGE #8 -------------------

var http = require('http');

var url = process.argv[2];

// ------------------- Approach #1 starts here -----------------------

/*
var req = http.get(url , function(res){
    res.setEncoding('utf8');
    var totalData = "";
    res.on('data', (data) => {
        totalData += data;                
    });

    res.on('error', console.error);

    res.on('end', () =>{
        console.log(totalData.length)
        console.log(totalData);
    });
});
*/ 

// ------------------- Approach #1 ends here -----------------------


// ------------------- Approach #2 starts here -----------------------

var bl = require('bl');

var req = http.get(url , function(res){
    
    res.pipe(bl(function (err,data){

        if(err)
        {
            return console.error(err);
        }
         data = data.toString();
        console.log(data.length);
        console.log(data)
    }));
});


// ------------------- Approach #2 ends here -----------------------