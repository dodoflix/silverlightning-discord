const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'guildBanRemove',
    execute(ban){
        DLogger.log.info(`${ban.user.name}'s ban removed at ${ban.guild.name} because of ${ban.reason}.`);
    },
};