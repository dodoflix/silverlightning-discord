const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'guildMemberRemove',
    execute(member){
        DLogger.log.info(`${member.name} removed from ${member.guild.name}.`);
    },
};