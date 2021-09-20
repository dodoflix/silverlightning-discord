const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'inviteDelete',
    execute(invite){
        DLogger.log.info(`${invite.inviter.name}'s invite deleted in ${invite.guild.name}.`);
    },
};