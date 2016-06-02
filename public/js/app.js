var socket = io();

socket.on('connect', function() {
	console.log('Connected to socket.io sever!');
});

socket.on('message', function(message) {
	console.log('Socket message: ');
	console.log(message.text);

	var $messages = jQuery('.messages');

	$messages.append('<p>' + message.text + '</p>');
});

var $form = jQuery('#message-form');

$form.on('submit', function(event) {
	event.preventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		text: $message.val()
	});

	$message.val('');
});