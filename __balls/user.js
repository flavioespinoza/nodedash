"use strict";
/**
 *
 * User Class
 *
 * @static
 * @memberOf _node
 * @since 1.0.0
 * @category App
 * @param {object:name} string Name of user
 * @param {object:email} string Email of user
 * @example
 *
 * const user = new _node.User({name: 'Flavio', email: 'flavio.espinoza@gmail.com'})
 * user.greet('Welcome to the Thunderdome!')
 * // => Hello Flavio!  Welcome to the Thunderdome!
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=user.js.map