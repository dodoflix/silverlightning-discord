const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'roleCreate',
    execute(role){
        DLogger.log.info(`${role.author.tag} deleted a role named ${role.name}.`);
    },
};