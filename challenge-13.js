var http = require('http');
var url = require('url');

var server = http.createServer(function(req,resp){
     var requrl = url.parse(req.url, true);
     //console.log(requrl.query.iso);

     var isoTime = new Date(requrl.query.iso);

     resp.writeHead(200, { 'Content-Type': 'application/json '})

     if(requrl.pathname == '/api/parsetime') {         
         var returnVal = { "hour" : isoTime.getHours(), "minute" : isoTime.getMinutes(), "second" : isoTime.getSeconds() }         
         resp.write(JSON.stringify(returnVal))
     } else {
        var returnVal = { "unixtime" : isoTime.getTime() }          
         resp.write(JSON.stringify(returnVal))
     }
     resp.end();
});

server.listen(process.argv[2]);
