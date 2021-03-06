const fs = require('fs');
const {Client, Collection, Intents} = require('discord.js');

const Sequelize = require('sequelize');
const {database, user, password, host, dialect, logging, storage} = require('./config.json');

let {token} = require('./config.json');

if (token === "")
    token = process.env.TOKEN;

const {MessageActionRow, MessageButton} = require('discord.js')

const client = new Client({intents: [Intents.FLAGS.GUILDS]});

const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: dialect,
    logging: logging,
    // SQLite Only
    storage: storage
});

const modelFiles = fs.readdirSync('./models').filter(file => file.endsWith('.js'));

for (const file of modelFiles) {
    // TODO
}

const Tags = sequelize.define('tags', {
    name: {
        type: Sequelize.STRING,
        unique: true
    },
    description: Sequelize.TEXT,
    username: Sequelize.STRING,
    usage_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
});

client.once('ready', () => {
    Tags.sync();
});

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
        return interaction.reply({
            content: 'There was an error while executing this command!',
            ephemeral: true,
            components: [help]
        });
    }
});

// TODO Bot Configuration and Utility
/*client.user.setPresence();*/

client.login(token);
