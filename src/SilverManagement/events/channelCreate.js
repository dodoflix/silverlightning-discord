const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'channelCreate',
    execute(channel){
        DLogger.log.info(`${channel.name} created at ${channel.guild.name}.`);
    },
};