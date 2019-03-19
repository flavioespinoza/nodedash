"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const log_log_1 = __importDefault(require("@flavioespinoza/log_log"));
class Error {
    constructor(method, err) {
        this.method = method;
        this.err = err;
    }
    _mapError(method, err) {
        let res = {
            success: false,
            method: method,
            info: 'Error'
        };
        if (typeof err === 'object') {
            let keys = lodash_1.default.keys(err);
            res.info = `Error occured at: ${new Date()}`;
            lodash_1.default.each(keys, (key) => {
                res[key] = lodash_1.default.toString(err[key]);
            });
        }
        else if (typeof err === 'string') {
            res.info = `Error occured at: ${new Date()}: ${err}`;
        }
        else {
            res.info = `Unkown Error occured at: ${new Date()}`;
        }
        return res;
    }
    _handle() {
        let _info = this._mapError(this.method, this.err);
        log_log_1.default.error(_info);
        return _info;
    }
}
const _error = Error;
exports._error = _error;
exports.default = Error;
//# sourceMappingURL=Error.js.map