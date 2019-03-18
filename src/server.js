"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path='./index.d.ts' />
const bodyParser = require("body-parser");
const ololog_1 = __importDefault(require("ololog"));
const app_1 = __importDefault(require("./app"));
const routes = [
    {
        method: 'get',
        route: '/home',
        name: 'home',
        cb: (req, res) => {
            res.status(200).send({
                route: '/',
                name: 'home'
            });
        }
    },
    {
        method: 'get',
        route: '/market_list',
        name: 'market_list',
        cb: (req, res) => {
            res.status(200).send({
                route: '/market_list',
                name: 'market_list'
            });
        }
    }
];
const PORT = 8080;
const app = new app_1.default({ url: 'https://mydash.com', routes: routes }).app;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
    ololog_1.default.magenta(`listening on port: ${PORT}`);
});
//# sourceMappingURL=server.js.map