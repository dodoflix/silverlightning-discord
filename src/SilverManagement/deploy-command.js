const fs = require('fs');
const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
let {clientId, guildId, token} = require('./config.json');

if(clientId === "")
    clientId = process.env.CLIENT;

if(guildId === "")
    guildId = process.env.GUILD;

if(token === "")
    token = process.env.TOKEN;

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({version: '9'}).setToken(token);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            {body: commands},
        );

        console.log('Successfully registered application commands.');
    } catch (error) {
        console.error(error);
    }
})();
