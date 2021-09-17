const fs = require('fs');
const {Client, Collection, Intents} = require('discord.js');
const {token} = require('./config.json');

const {MessageActionRow, MessageButton} = require('discord.js')

const client = new Client({intents: [Intents.FLAGS.GUILDS]});

// Register Commands
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

// Register Events
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// Slash command manager
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        // TODO HELP BUTTON
        const help = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('clearchat')
                    .setLabel('Help')
                    .setStyle('PRIMARY'),
            );
        return interaction.reply({content: 'There was an error while executing this command!', ephemeral: true, components: [help]});
    }
});

client.login(token);
