const asyncData = require('../datamgmt/asyncRaceData.js');

module.exports = {
	name: 'async-init',
	description: 'Iniciar una carrera asíncrona.',
	usage: '[título] [seed]',
	args: true,
	guildOnly: true,
	execute(message, args) {
		if (args.length !== 2) {
			return message.channel.send(`${message.author}, uso del comando: ${this.usage}`);
		}
		asyncData.addAsyncRace(args[0], args[1]);

		message.channel.send(`${message.author}, la carrera "${args[0]}: ${args[1]}" ha sido creada.`);
	},
};