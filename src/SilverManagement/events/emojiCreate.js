const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'emojiCreate',
    execute(emoji){
        DLogger.log.info(`${emoji.name} created at ${emoji.guild.name}.`);
    },
};