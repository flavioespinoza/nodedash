var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import router from 'express';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
const baseName = path.basename(module.filename);
function auth(route) {
    return __awaiter(this, void 0, void 0, function* () {
        return route;
    });
}
function getAuthenticatedUser() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
function buildRoutes(list) {
    _.each(list, (obj) => {
        return router.post('/register', auth('register'));
    });
}
const loginRegister = [
    'register',
    'login',
    'forgot_password',
    'reset_password',
    'get_all'
];
const authReq = [
    'list_simple',
    'list_compound',
    'logout'
];
const public = [
    'home',
    'about',
    'contact'
];
const routes = fs
    .readdirSync(path.join(__dirname))
    .filter(file => (file.indexOf('.') !== 0) && (file !== baseName) && (file.slice(-3) === '.js'))
    .map(file => require(path.join(__dirname, file)));
//# sourceMappingURL=__router'.js.map