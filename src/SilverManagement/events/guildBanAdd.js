const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'guildBanAdd',
    execute(ban){
        DLogger.log.info(`${ban.user.name} banned at ${ban.guild.name} because of ${ban.reason}.`);
    },
};