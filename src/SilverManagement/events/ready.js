const DLogger = require('../../Modules/DLogger/index.js');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        DLogger.log.info(`The bot is ready! Signed in as ${DLogger.format.bright}${client.user.tag}${DLogger.format.reset}`);
    },
};