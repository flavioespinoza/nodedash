"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const util_1 = __importDefault(require("util"));
const c = require('ansi-colors');
exports._log = {
    deep: (data) => {
        const options = {
            showHidden: false,
            depth: null,
            colors: true
        };
        const inspect = util_1.default.inspect(data, options);
        console.log(inspect);
    },
    info: (msg) => {
        if (typeof msg === 'object') {
            msg = lodash_1.default.toString(msg);
        }
        console.log(c.yellow(`foo ${c.red.bold('red')} bar ${c.cyan('cyan')} baz`));
        console.log(c.bgBlue(` Info: ${msg} `));
    },
    error: (msg) => {
        c.red;
    },
    alert: (msg) => {
        if (typeof msg === 'object') {
            msg = lodash_1.default.toString(msg);
        }
        console.log(c.bgYellowBright(c.black(` Alert: ${msg} `)));
    },
    warn: (msg) => {
        if (typeof msg === 'object') {
            msg = lodash_1.default.toString(msg);
        }
        console.log(c.bgMagenta(c.white(` Warn: ${msg} `)));
    }
};
//# sourceMappingURL=logdash.js.map