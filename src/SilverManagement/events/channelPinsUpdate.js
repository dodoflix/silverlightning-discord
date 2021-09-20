const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'channelPinsUpdate',
    execute(channel, time){
        DLogger.log.info(`Pins are updated in ${channel.name} at ${channel.guild.name} on ${time}.`);
    },
};