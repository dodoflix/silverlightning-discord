const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'guildDelete',
    execute(guild){
        DLogger.log.info(`${guild.client.name} removed from ${guild.name}.`);
    },
};