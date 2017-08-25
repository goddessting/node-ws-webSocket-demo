let socket = io();

socket.on('name', function (data) {
    alert(data.username);
    socket.emit('my other event', { my: 'data' });
});


