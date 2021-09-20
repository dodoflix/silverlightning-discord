const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'emojiUpdate',
    execute(oldEmoji, newEmoji){
        DLogger.log.info(`${oldEmoji.name} updated as ${newEmoji.name} at ${newEmoji.guild.name}.`);
    },
};