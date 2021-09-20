const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'inviteCreate',
    execute(invite){
        DLogger.log.info(`${invite.inviter.name} created a invite in ${invite.guild.name}.`);
    },
};