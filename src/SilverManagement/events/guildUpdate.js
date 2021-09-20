const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'guildUpdate',
    execute(oldGuild, newGuild){
        DLogger.log.info(`${oldGuild.name} is updated as ${newGuild.name}.`);
    },
};