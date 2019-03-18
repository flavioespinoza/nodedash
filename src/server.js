"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path='./index.d.ts' />
const bodyParser = require("body-parser");
const ololog_1 = __importDefault(require("ololog"));
const app_1 = __importDefault(require("./app"));
const lodash_1 = __importDefault(require("lodash"));
const PORT = 8080;
const routes = [
    {
        method: 'get',
        route: '/home',
        name: 'home',
        query: {
            method: 'authenticate',
            params: {
                username: 'flavioespinoza',
                email: 'flavio.espinoza@gmail.com'
            }
        },
        cb: (req, res) => {
            const keys = lodash_1.default.keys(req);
            res.status(200).send({
                route: '/',
                name: 'home',
                keys: keys
            });
        }
    },
    {
        method: 'get',
        route: '/market_list',
        name: 'market_list',
        body: {
            query: {
                method: 'market_list',
                params: {
                    exchange: 'hitbtc',
                    interval: 15,
                    limit: 20,
                    market_list: [
                        {
                            base: 'BTC',
                            quote: 'USDT',
                            symbol: 'BTC/USDT'
                        },
                        {
                            base: 'ETH',
                            quote: 'USDT',
                            symbol: 'ETH/USDT'
                        },
                        {
                            base: 'ADA',
                            quote: 'BTC',
                            symbol: 'ADA/BTC'
                        }
                    ]
                }
            }
        },
        cb: (req, res) => {
            ololog_1.default.blue(req);
            console.log(req);
            res.status(200).send({
                route: '/market_list',
                name: 'market_list'
            });
        }
    }
];
const app = new app_1.default({ url: 'https://mydash.com', routes: routes }).app;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
    ololog_1.default.magenta(`listening on port: ${PORT}`);
});
