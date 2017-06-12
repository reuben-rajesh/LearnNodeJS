'use strict';

var net = require('net');

function formatNumber(val) {
    return (val < 10 ? '0' : '') + val
}


var server = net.createServer(function (socket){
    var dateNow = new Date();    
    socket.end( formatNumber(dateNow.getFullYear()) + "-" + formatNumber((parseInt(dateNow.getMonth()) + 1)) + "-" + formatNumber(dateNow.getDate()) + " " + formatNumber(dateNow.getHours()) + ":" + formatNumber(dateNow.getMinutes()) + "\n");         
});

server.listen(process.argv[2]);

