const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'guildMemberAdd',
    execute(member){
        DLogger.log.info(`${member.name} joined to ${member.guild.name}.`);
    },
};