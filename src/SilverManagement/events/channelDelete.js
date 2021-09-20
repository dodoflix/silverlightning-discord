const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'channelDelete',
    execute(channel){
        DLogger.log.info(`${channel.name} deleted at ${channel.guild.name}.`);
    },
};