const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'guildCreate',
    execute(guild){
        DLogger.log.info(`${guild.client.name} joined to ${guild.name}.`);
    },
};