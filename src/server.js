"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param  {} 'ololog'
 * @param  {false}} .configure({locate
 */
const app_1 = __importDefault(require("./app"));
const log = require('ololog').configure({
    locate: false
});
const candel_obj_model = {
    time: 1539548160,
    close: 6398.75,
    high: 6399.07,
    low: 6395,
    open: 6398.17,
    volumefrom: 2.94,
    volumeto: 18810.2
};
const PORT = 8080;
const routes = [
    {
        method: 'get',
        route: '/home',
        name: 'home',
        body: {
            query: {
                method: 'authenticate',
                params: {
                    username: 'flavioespinoza',
                    email: 'flavio.espinoza@gmail.com'
                }
            }
        },
        cb: (req, res) => {
            const user_agent = req.get('User-Agent');
            const body = req.body;
            log.red(body);
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
            log.blue(req);
            console.log(req);
            res.status(200).send({
                route: '/market_list',
                name: 'market_list'
            });
        }
    },
    {
        method: 'get',
        route: '/market/btc_usdt',
        body: {
            query: {
                method: 'market',
                params: {
                    exchange: 'hitbtc',
                    interval: 15,
                    limit: 20,
                    market: {
                        base: 'BTC',
                        quote: 'USDT',
                        symbol: 'BTC/USDT'
                    }
                }
            }
        },
        cb: (req, res) => {
            log.blue(req);
            console.log(req);
            res.status(200).send({
                route: '/market/btc_usdt',
                name: '/market/btc_usdt'
            });
        }
    }
];
const _app = new app_1.default({ url: 'balls', routes: routes }).app;
_app.listen(PORT, 'localhost', 1, () => { });
