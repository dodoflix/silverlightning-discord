const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'stickerCreate',
    execute(sticker){
        DLogger.log.info(`${sticker.author.tag} created a sticker named ${sticker.name}.`);
    },
};