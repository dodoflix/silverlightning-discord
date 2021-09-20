const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'messageDelete',
    execute(message){
        DLogger.log.info(`A message deleted from ${message.guild.name} at ${message.channel.name}.`);
    },
};