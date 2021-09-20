const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'channelUpdate',
    execute(oldChannel, newChannel){
        DLogger.log.info(`${oldChannel.name} updated at ${newChannel.guild.name} as ${newChannel.name}.`);
    },
};