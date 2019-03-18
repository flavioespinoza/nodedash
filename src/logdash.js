"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var util_1 = __importDefault(require("util"));
var c = require('ansi-colors');
exports._log = {
    deep: function (data) {
        var options = {
            showHidden: false,
            depth: null,
            colors: true
        };
        var inspect = util_1.default.inspect(data, options);
        console.log(inspect);
    },
    info: function (msg) {
        if (typeof msg === 'object') {
            msg = lodash_1.default.toString(msg);
        }
        console.log(c.yellow("foo " + c.red.bold('red') + " bar " + c.cyan('cyan') + " baz"));
        console.log(c.bgBlue(" Info: " + msg + " "));
    },
    error: function (msg) {
        c.red;
    },
    alert: function (msg) {
        if (typeof msg === 'object') {
            msg = lodash_1.default.toString(msg);
        }
        console.log(c.bgYellowBright(c.black(" Alert: " + msg + " ")));
    },
    warn: function (msg) {
        if (typeof msg === 'object') {
            msg = lodash_1.default.toString(msg);
        }
        console.log(c.bgMagenta(c.white(" Warn: " + msg + " ")));
    }
};
//# sourceMappingURL=logdash.js.map