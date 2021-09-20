const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'messageCreate',
    execute(message){
        DLogger.log.info(`${message.author.name} sent a message on ${message.channel.name} at ${message.guild.name}.`);
    },
};