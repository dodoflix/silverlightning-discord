const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'stickerDelete',
    execute(sticker){
        DLogger.log.info(`${sticker.author.tag}'s sticker named ${sticker.name} deleted from ${sticker.guild.name}.`);
    },
};