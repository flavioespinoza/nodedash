'use strict';

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (undefined && undefined.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const axios_1 = __importDefault(require("axios"));
const _ = __importStar(require("lodash"));
const error_1 = require("./error");
const log = require('ololog').configure({ locate: false });
const crypto_arr = [];
const router = express.Router();
let user_agent;
/**
 * App
 *
 * @static
 * @memberOf _n
 * @since 1.0.0
 * @category _node
 * @param  {} {this.app=express(
 * @example
 *
 * const _f = require('flodash')
 *
 * const PORT = 7001
 * _f.app.listen(PORT, () => {
 *		console.log()
 * })
 * // => disco!
 */
class App {
    constructor(props) {
        this._balls = (req, res, next) => {
            next();
        };
        this._get_data = async (route) => {
            let _test_markets = [
                {
                    base: 'BTC',
                    quote: 'USDT',
                    symbol: 'BTC/USDT'
                }
            ];
            let _market_name = this._market_name(_test_markets[0].symbol);
            let _base = _test_markets[0].base;
            let _quote = _test_markets[0].quote;
            let _url = this._url(_base, _quote, 2);
            await this._rest_client(_market_name, _url, _test_markets[0]);
            return new Promise((resolve, reject) => {
                resolve(route);
            });
        };
        this.url = props.url;
        this.routes = props.routes;
        this.app = express();
        this._config();
        this._routes();
    }
    _config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use((req, res, next) => {
            user_agent = req.get('User-Agent');
            next();
        });
    }
    _market_name(sym) {
        return sym.replace('/', '_');
    }
    _url(base, quote, limit) {
        let _limit = Math.floor(limit);
        return `https://min-api.cryptocompare.com/data/histominute?fsym=${base}&tsym=${quote}&limit=${_limit}&aggregate=1&e=hitbtc`;
    }
    _routes() {
        _.each(this.routes, (route) => {
            if (route.method === 'get') {
                router.get(route.route, route.cb);
            }
            else if (route.method === 'post') {
                router.post(route.route, route.cb);
            }
        });
        this.app.use('/', router);
    }
    _routes2() {
        router.get('/', (req, res) => {
            this._get_data('/').then(response => {
                let exchange_name = 'hitbtc';
                let market_name = 'BTC_USD';
                log.blue('crypto_arr', crypto_arr.length);
                log.blue('crypto_arr', crypto_arr[0]);
                _.each(crypto_arr, (candle_obj) => {
                    let _id = `${exchange_name}__${market_name}___${candle_obj.timestamp}`;
                });
                res.status(200).send(crypto_arr);
            });
        });
        router.post('/', (req, res) => {
            log.lightYellow('post', '/');
            const data = req.body;
            res.status(200).send(data);
        });
        this.app.use('/', router);
    }
    _rest_client(market_name, url, market_info) {
        axios_1.default({
            url: url,
            method: 'get'
        })
            .then((res) => {
        })
            .catch((err) => {
            error_1.error('_rest_client', err);
        });
    }
    _rest_client2(market_name, url, market_info) {
        log.green('market_name', market_name);
        log.cyan('url', url);
        log.blue('market_info', market_info);
        return new Promise((resolve, reject) => {
            axios_1.default({
                url: url,
                method: 'get'
            })
                .then(res => {
                let res_data = res.data;
                _.each(res_data.Data, (obj) => {
                    let timestamp = obj.time * 1000;
                    let date = new Date(timestamp);
                    obj.volume = _.add(obj.volumeto, obj.volumeto);
                    crypto_arr.push({
                        timestamp: timestamp,
                        date: date,
                        close: obj.close,
                        high: obj.high,
                        low: obj.low,
                        open: obj.open,
                        volume: obj.volumefrom,
                        short: null,
                        long: null
                    });
                });
                resolve(res_data);
            })
                .catch(err => {
                error_1.error('_rest_client', err);
            });
        });
    }
}
exports.default = App;

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * User
 *
 * @static
 * @memberOf _n
 * @since 1.0.0
 * @category _node
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

Object.defineProperty(exports, "__esModule", { value: true });
require('ansicolor').nice;
const log$1 = require('ololog').configure({ locate: false });
const _$1 = require('lodash');
/**
 * Error
 *
 * @static
 * @memberOf _n
 * @since 1.0.0
 * @category _node
 * @param  {} {this.app=express(
 * @example
 *
 * const _f = require('flodash')
 *
 * const PORT = 7001
 * _f.error('someMethodName', err)
 * // => disco!
 */
exports.error = (method, err) => {
    log$1.lightYellow(`${method} ERROR:`, err.message);
    return {
        success: false,
        method: method,
        info: _$1.assign({}, err)
    };
};
