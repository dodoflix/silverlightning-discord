const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'guildMemberAvailable',
    execute(member){
        DLogger.log.info(`${member.name} is now available on ${member.guild.name}.`);
    },
};