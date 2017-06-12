var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res){
    if(req.method == 'POST') {
        var body = '';
        req.pipe(map(function(data){
            return data.toString().toUpperCase()
        })).pipe(res);
    }
});

server.listen(process.argv[2]);
