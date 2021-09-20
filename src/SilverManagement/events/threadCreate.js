const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'threadCreate',
    execute(thread){
        DLogger.log.info(`A thread created named ${thread.name} at ${thread.guild.name}.`);
    },
};