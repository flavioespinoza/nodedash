"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * User
 *
 * @static
 * @memberOf _f
 * @since 1.0.0
 * @category Import
 * @param  {} {this.app=express(
 * @example
 *
 * const _f = require('flodash')
 *
 * const PORT = 7001
 * _f.user = new User({name: 'flavio', email: 'flavio.espinoza@gmail.com'})
 */
class User {
    constructor(name, greeting) {
        this.name = name;
        this.greeting = greeting;
    }
    greet() {
        return `Hello ${this.name}! ${this.greeting}`;
    }
}
exports.default = User;
