const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'guildMemberUpdate',
    execute(oldMember, newMember){
        DLogger.log.info(`${oldMember.name} updated on ${newMember.guild.name}.`);
    },
};