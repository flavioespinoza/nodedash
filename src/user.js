"use strict";
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
