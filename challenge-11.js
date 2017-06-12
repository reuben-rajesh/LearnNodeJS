
var http = require('http');
var fs = require('fs');

var server = http.createServer( function(request, response) {
    var options = {
        flags: 'r',
        autoClose: true        
    };
    var src = fs.createReadStream(process.argv[3], options);
    response.writeHead(200, { 'content-type': 'text/plain' })
    src.pipe(response);
});

server.listen(process.argv[2]);