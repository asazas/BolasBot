const fs = require('fs');
const Discord = require('discord.js');

const asyncRaceSeeds = new Discord.Collection();
// const asyncRaceResults = new Discord.Collection();

function writeAsyncRaceSeeds() {
	const races = Object.fromEntries(asyncRaceSeeds);
	if (!fs.existsSync(__dirname + '/../data')) {
		fs.mkdirSync(__dirname + '/../data', { recursive: true });
	}
	fs.writeFileSync(__dirname + '/../data/asyncRaceData.json', JSON.stringify(races, null, 4), { flag: 'w' });
}

exports.readAsyncRaceSeeds = () => {
	if (fs.existsSync(__dirname + '/../data/asyncRaceData.json')) {
		const races = require(__dirname + '/../data/asyncRaceData.json');
		for (const [key, value] of Object.entries(races)) {
			asyncRaceSeeds.set(key, value);
		}
		console.log('Leído: asyncRaceData.json');
	}
};

exports.getAsyncRaceSeeds = () => {
	return asyncRaceSeeds;
};

exports.findAsyncRace = (id) => {
	return asyncRaceSeeds.get(id);
};

exports.addAsyncRace = (id, seed) => {
	asyncRaceSeeds.set(id, seed);
	writeAsyncRaceSeeds();
};

exports.deleteAsyncRace = (id) => {
	asyncRaceSeeds.delete(id);
	writeAsyncRaceSeeds();
};