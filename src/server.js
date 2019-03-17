"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param  {} 'ololog'
 * @param  {false}} .configure({locate
 */
const log = require('ololog').configure({
    locate: false
});
const app_1 = __importDefault(require("./app"));
const PORT = 7000;
app_1.default.listen(PORT, function () {
    log.yellow('Express server listening on port ', PORT);
});
