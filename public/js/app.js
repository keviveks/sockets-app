var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

console.log(name + ' joined ' + room);

socket.on('connect', function() {
	console.log('Connected to socket.io sever!');
});

socket.on('message', function(message) {
	console.log('Socket message: ');
	console.log(message.text);

	var $messages = jQuery('.messages');
	var momentTimeStamp = moment.utc(message.timestamp);

	$messages.append('<p><strong>' + message.name + ' ' + momentTimeStamp.local().format('h:mm a') + ': </strong></p>');
	$messages.append('<p>' + message.text + '</p>');
});

var $form = jQuery('#message-form');

$form.on('submit', function(event) {
	event.preventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		name: name,
		text: $message.val()
	});

	$message.val('');
});