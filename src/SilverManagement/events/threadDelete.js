const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'threadDelete',
    execute(thread){
        DLogger.log.info(`A thread deleted named ${thread.name} at ${thread.guild.name}.`);
    },
};