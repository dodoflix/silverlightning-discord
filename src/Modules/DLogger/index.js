const format = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
    reverse: '\x1b[7m',
    hidden: '\x1b[8m',
}

const foreground = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
}

const background = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
}

// TODO DATE

let ts = Date.now();
let date_ob = new Date(ts);
let day = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

const log = {
    info: function (info) {
        console.log(`[${day}-${month}-${year}] ${format.bright}${foreground.blue}Info${format.reset}: ${info}`);
    },
    warning: function (warning) {
        console.log(`${format.bright}${foreground.yellow}Warning${format.reset}: ${warning}`);
    },
    error: function (error) {
        console.log(`${format.bright}${foreground.red}Error${format.reset}: ${error}`);
    }
};

exports.format = format;
exports.foreground = foreground;
exports.background = background;
exports.log = log;