const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'guildUnavailable',
    execute(guild){
        DLogger.log.info(`${guild.name} is unavailable now.`);
    },
};