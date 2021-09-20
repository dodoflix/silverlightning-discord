const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'emojiDelete',
    execute(emoji){
        DLogger.log.info(`${emoji.name} deleted at ${emoji.guild.name}.`);
    },
};