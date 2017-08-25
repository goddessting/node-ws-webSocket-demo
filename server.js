const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws, req) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
    ws.send('something');
});

server.listen(8000 , function listening() {
    console.log('Listening on %d', server.address().port);
});