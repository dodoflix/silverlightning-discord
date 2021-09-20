const DLogger = require('../../Modules/DLogger/index.js')

module.exports = {
    name:'messageUpdate',
    execute(oldMessage, newMessage){
        DLogger.log.info(`${oldMessage.content} changed to ${newMessage.content}.`);
    },
};