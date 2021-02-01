module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	execute(message) {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	},
};