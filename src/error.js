"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('ansicolor').nice;
const log = require('ololog').configure({ locate: false });
const _ = require('lodash');
function error(method, err) {
    log.lightYellow(`${method} ERROR:`, err.message);
    return {
        success: false,
        method: method,
        info: _.assign({}, err)
    };
}
exports.error = error;
