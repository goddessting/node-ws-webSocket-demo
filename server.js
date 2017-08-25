var express = require('express')
    , app = new express()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server);

server.listen(8000);

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
    socket.emit('name', {username: 'litingting ' + new Date()});
    socket.on('my other event', function (data) {
        console.log(data +  new Date());

    });
});