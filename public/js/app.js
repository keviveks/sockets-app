var socket = io();

socket.on('connect', function() {
	console.log('Connected to socket.io sever!');
});

socket.on('message', function(message) {
	console.log('Socket message: ');
	console.log(message.text);
});