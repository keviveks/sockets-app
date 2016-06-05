var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

console.log(name + ' joined ' + room);

jQuery('.room-title').html(room);

socket.on('connect', function() {
	console.log('Connected to socket.io sever!');
	
	socket.emit('joinRoom', {
		name: name,
		room: room
	});
});

socket.on('message', function(message) {
	console.log('Socket message: ');
	console.log(message.text);

	var $messages = jQuery('.messages');
	var $message = jQuery('<li class="list-group-item"></li>')
	var momentTimeStamp = moment.utc(message.timestamp);

	$message.append('<p><strong>' + message.name + ' ' + momentTimeStamp.local().format('h:mm a') + ': </strong></p>');
	$message.append('<p>' + message.text + '</p>');
	$messages.append($message);
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