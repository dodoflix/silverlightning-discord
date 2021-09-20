const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'roleCreate',
    execute(oldRole, newRole){
        DLogger.log.info(`${oldRole.name} updated as ${newRole.name}.`);
    },
};