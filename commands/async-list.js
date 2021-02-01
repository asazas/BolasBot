const asyncData = require('../datamgmt/asyncRaceData.js');

module.exports = {
	name: 'async-list',
	description: 'Listar las carreras asíncronas actuales.',
	guildOnly: true,
	execute(message) {
		const races = asyncData.getAsyncRaceSeeds();
		const respuesta = [];
		respuesta.push('Carreras asíncronas actuales:');
		races.forEach((value, key) => {
			respuesta.push(` - ${key}: ${value}`);
		});

		message.channel.send(respuesta, { split: true });
	},
};