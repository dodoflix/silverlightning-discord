const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'stickerUpdate',
    execute(oldSticker, newSticker){
        DLogger.log.info(`${oldSticker.name} updated as ${newSticker.name}.`);
    },
};