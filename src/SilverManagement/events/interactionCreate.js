const DLogger = require('../../Modules/DLogger/index.js');

module.exports = {
    name: 'interactionCreate',
    execute(interaction) {
        DLogger.log.info(`${DLogger.format.bright}${interaction.user.tag}${DLogger.format.reset} in ${DLogger.format.bright}${interaction.guild.name}:#${interaction.channel.name}${DLogger.format.reset} triggered ${DLogger.format.bright}${interaction.commandName}${DLogger.format.reset} command.`);
    },
};