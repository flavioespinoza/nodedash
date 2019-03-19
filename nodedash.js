/**
 * @license
 * datedash <https://github.com/flavioespinoza/datedash>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://github.com/flavioespinoza/datedash/blob/master/LICENSE>
 * Based on lodash.js 5.0.0 <https://lodash.com/>
 * Based on lodash.js by John-David Dalton <https://github.com/jdalton>
 */
;
(function () {

    /** Used as the semantic version number. */
    var __package = require('./package.json')

    var VERSION = __package.version

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global

    /** Detect free variable `self`. */
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self

    /** Used as a reference to the global object. */
    var root = freeGlobal || freeSelf || Function('return this')()

    /** Detect free variable `exports`. */
    var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports

    /** Detect free variable `module`. */
    var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module

    /*--------------------------------------------------------------------------*/

    /** Built-in value references. */
    var Symbol = root.Symbol

    /** Used to lookup unminified function names. */
    var realNames = {}

    /*------------------------------------------------------------------------*/


    /*------------------------------------------------------------------------*/

    /**
     * @private
     * @name _d
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `datedash` instance.
     * @returns {Object} Returns the new `datedash` wrapper instance.
     */
    function datedash() {
        // No operation performed.
    }

    /*------------------------------------------------------------------------*/

    /**
     * Import using `esm` or `TypeScript`
     *
     * @static
     * @since 1.0.0
     * @category Import
     * @example
     *
     * import _d from 'datedash'
     *
     * _d.date('3/14/2019', 'uk')
     * // => 14 Mar 2019
     *
     * _d.addDays('3/6/19', 1, '-')
     * // => 03-07-2019
     *
     * _d.subtractDays('3/6/19', 1, '-')
     * // => 03-05-2019
     */
    this.import = () => {

    }

    /**
     * Import individual ES Modules using `esm` or `TypeScript`
     *
     * @static
     * @since 1.0.0
     * @category Import
     * @example
     *
     * import { addDate, subtractDate } from 'datedash'
     *
     * addDays('3/6/19', 1, '-')
     * // => 03-07-2019
     *
     * subtractDays('3/6/19', 1, '-')
     * // => 03-05-2019
     */
    this.importModules = async moduleArr => {

    }

    /*------------------------------------------------------------------------*/

    /**
     * Import using `esm` or `TypeScript`
     *
     * @static
     * @since 1.0.0
     * @category Require
     * @example
     *
     * const _d = require('datedash')
     *
     * _d.date('3/14/2019', 'uk')
     * // => 14 Mar 2019
     *
     * _d.addDays('3/6/19', 1, '-')
     * // => 03-07-2019
     *
     * _d.subtractDays('3/6/19', 1, '-')
     * // => 03-05-2019
     */
    this.require = () => {

    }

    /**
     *
     * Computes input `date` converts to string and returns with specified `format`.
     *
     * @static
     * @memberOf _d
     * @since 1.0.0
     * @category Date
     * @param {date} Date options are `new Date()`, `timestamp` or `string` in valid date format. See example below.
     * @param {string} format
     * @returns {string} Returns the date as a String in specified format.
     * @example
     *
     * let any_date = "1/07/2019"
     *
     * _d.date(any_date, '/')
     * // => 01/07/2019
     *
     * _d.date(any_date, '-')
     * // => 01-07-2019
     *
     * _d.date(any_date, '.')
     * // => 01.07.2019
     *
     * _d.date(any_date, 'MMM DD YYYY')
     * // => Jan 07 2019
     *
     * _d.date(any_date, 'england')
     * // => 07 Jan 2019
     *
     * _d.date(any_date, 'uk')
     * // => 07 Jan 2019
     *
     * _d.date(any_date, 'full')
     * // => Mon Jan 07 2019 00:00:00 GMT-0700 (Mountain Standard Time)
     *
     */
    const date = require('./methods/date')



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
    const log_log_1 = __importDefault(require("@flavioespinoza/log_log"));
    const lodash_1 = __importDefault(require("lodash"));
    const body_parser_1 = __importDefault(require("body-parser"));
    const cors_1 = __importDefault(require("cors"));
    const dotenv_1 = __importDefault(require("dotenv"));
    const express_1 = __importStar(require("express"));
    const morgan_1 = __importDefault(require("morgan"));
    const socket_io_1 = __importDefault(require("socket.io"));
    // load NODE_ENV from .env
    dotenv_1.default.load();
    /**
     *
     * Express Router
     *
     * @static
     * @memberOf _n
     * @category Import
     * @param {{routeList:Array}} Array of Objects with http.method and route name
     * @param {{routeObj:Object}} Object Each object has two properties `method` and `route` and `params`
     * @param {{routeObj.method}} String `get` or `post` or `put`
     * @param {{routeObj.route}} String Route name `home` or `profile` or `settings` or `whatevs :)`
     * @param {{routeObj.params}} Object JSON request query specific to your application
     * @returns {{router:expres.Router}} Router of specified routes
     * @example
     *
     * const routeList = [
     *      {
     *          method: 'get',
     *          route: 'home',
     *          params: {}
     *      },
     *      {
     *          method: 'get',
     *          route: 'profile',
     *          params: {}
     *      },
     *      {
     *          method: 'get',
     *          route: 'settings',
     *          params: {}
     *      }
     * ]
     *
     * const router = new _node.BuildRoutes(routeList).init()
     *
     * const port = 6001
     *
     * const app = new _node.AppSocket(port, router).init()
     *
     * */
    class BuildRouter {
        constructor(routeList, router) {
            this.routeList = routeList;
            this.router = express_1.Router();
        }
        init() {
            lodash_1.default.each(this.routeList, (obj) => {
                if (obj.method === 'get') {
                    this.router.get(obj.route, (req, res, next) => {
                        res.send({
                            method: 'get',
                            route: obj.route,
                            sucesss: true
                        });
                    });
                }
                else if (obj.method === 'post') {
                    this.router.post(obj.route, (req, res, next) => {
                        res.send({
                            method: 'post',
                            route: obj.route,
                            sucesss: true
                        });
                    });
                }
                else if (obj.method === 'put') {
                    this.router.put(obj.route, (req, res, next) => {
                        res.send({
                            method: 'put',
                            route: obj.route,
                            sucesss: true
                        });
                    });
                }
            });
            return this.router;
        }
    }
    this.BuildRouter = BuildRouter;


    /**
     * Express App with Socket.io WebSocket
     *
     * @static
     * @memberOf _node
     * @category App
     * @param {{port:Number}} Number 4 Digit integer that the server and socket are listens on
     * @param {{router:express.Router}} Router built with the _node.BuildRoutes class
     * @returns {{app:express.Application}} Express App with Socket.io Websocket
     * @example
     *
     * const router = "Note: the router is the second @param and is built with the BuidlRouter class, See:" _node.BuildRouter
     *
     * const port = 6001
     *
     * const app = new _node.AppSocket(port, router).init()
     *
     * */
    class AppSocket {
        constructor(port, router) {
            this.port = port | 6001;
            this.router = router;
        }
        init() {
            const logger = morgan_1.default('combigned');
            const app = express_1.default();
            app.use(logger);
            app.use(cors_1.default());
            app.use(body_parser_1.default());
            app.use(this.router);
            const server = app.listen(this.port, () => {
                log_log_1.default.info(`app listening on PORT: ${this.port}`);
            });
            const _io = socket_io_1.default.listen(server);
            return app;
        }
    }
    module.exports = AppSocket;

    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __importDefault$1 = (undefined && undefined.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    const express_1$1 = __importDefault$1(require("express"));
    const body_parser_1$1 = __importDefault$1(require("body-parser"));
    const axios_1 = __importDefault$1(require("axios"));
    const lodash_1$1 = __importDefault$1(require("lodash"));
    const _error_1 = __importDefault$1(require("./_error"));
    const router = express_1$1.default.Router();
    const crypto_arr = [];
    let user_agent;
    /** -- ExpressApp -----------------------------------------------------------------------
     *
     * core Express Application
     *
     * @static
     * @memberOf _node
     * @category App
     * @param {object} options
     * @param {{options:url}} url
     * @param {{options:routes}} routes
     * @example
     *
     * const _node = require('node_dash')
     *
     * const PORT = process.env.PORT || 6001
     * const routes = {} // See _node.routes() method for configuration
     * const options = {
     * 	url: 'yoursite.com',
     * 	routes: routes
     * }
     *
     * const app = new _node.App(options).app
     *
     * app.listen(PORT, () => {
     * 	console.log(`app listening on port: ${PORT}`)
     * })
     * //=> app listening on port: 6001
     *
     */
    class App {
        constructor(props) {
            this._balls = (req, res, next) => {
                next();
            };
            this._get_data = (route) => __awaiter(this, void 0, void 0, function* () {
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
                yield this._rest_client(_market_name, _url, _test_markets[0]);
                return new Promise((resolve, reject) => {
                    resolve(route);
                });
            });
            this.url = props.url;
            this.routes = props.routes;
            this.app = express_1$1.default();
            this._config();
            this._routes();
        }
        _config() {
            this.app.use(body_parser_1$1.default.json());
            this.app.use(body_parser_1$1.default.urlencoded({ extended: false }));
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
            lodash_1$1.default.each(this.routes, (route) => {
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
                    lodash_1$1.default.each(crypto_arr, (candle_obj) => {
                        let _id = `${exchange_name}__${market_name}___${candle_obj.timestamp}`;
                    });
                    res.status(200).send(crypto_arr);
                });
            });
            router.post('/', (req, res) => {
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
                .then((res) => { })
                .catch((err) => {
                    _error_1.default('_rest_client', err);
                });
        }
        _rest_client2(market_name, url, market_info) {
            return new Promise((resolve, reject) => {
                axios_1.default({
                    url: url,
                    method: 'get'
                })
                    .then(res => {
                        let res_data = res.data;
                        lodash_1$1.default.each(res_data.Data, (obj) => {
                            let timestamp = obj.time * 1000;
                            let date = new Date(timestamp);
                            obj.volume = lodash_1$1.default.add(obj.volumeto, obj.volumeto);
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
                        _error_1.default('_rest_client', err);
                    });
            });
        }
    }
    exports.default = App;


    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _d
     * @since 1.0.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * const { defer } = require('lodash')
     *
     * defer(function(stamp) {
     *   console.log(_d.now() - stamp)
     * }, _d.now())
     *
     * // => Logs milliseconds it took for the deferred invocation.
     */
    const now = require('./methods/now')

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * `date` argument. If `date` is `undefined` it gives milliseconds elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _d
     * @since 1.0.0
     * @category Date
     * @param {date} Date to convert to timestamp.
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _d.getTimestamp('July 4 1776')
     * // => 121244400000
     *
     * _d.getTimestamp()
     * // => 1552353178563
     * // returns now timestamp
     *
     * _d.getTimestamp('11/4/1973')
     * // => -6106035604000
     */
    const getTimestamp = require('./methods/getTimestamp')

    /**
     * Verifies if `value` is a valid `Date object` and valid `Date`.
     *
     * @static
     * @memberOf _d
     * @since 1.0.0
     * @category Date
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a `Date object` & valid `Date`, else `false`.
     * @example
     *
     * _d.isDate('3/3/19')
     * // => true
     *
     * _d.isDate(new Date())
     * // => true
     *
     * _d.isDate('Jul 4 1776')
     * // => true
     *
     * _d.isDate(25200000)
     * // => true
     *
     * _d.isDate('3/33/19')
     * // => false
     *
     * function getDate() {
     *     return '1/1/19'
     * }
     * _d.isDate(getDate)
     * // => false
     *
     * _d.isDate(getDate())
     * // => true
     */
    const isDate = require('./methods/isDate')

    /**
     * Input `_date` add `nDays` with `format`
     *
     * @static
     * @memberOf _d
     * @since 1.0.0
     * @category Math
     * @param {date} Date
     * @param {number} days to add
     * @param {string} format
     * @example
     *
     * const any_date = '3/6/19'
     *
     * _d.addDays(any_date, 1, '-')
     * // => 03-07-2019
     *
     * _d.addDays(any_date, 2, '.')
     * // => 03.08.2019
     *
     * _d.addDays(any_date, 3, 'uk')
     * // => 09 Mar 2019
     */
    const addDays = require('./methods/addDays')

    /**
     * Input `_date` subtract `nDays` with `format`
     *
     * @static
     * @memberOf _d
     * @since 1.0.0
     * @category Math
     * @param {Date} Date
     * @param {number} days to subtract
     * @param {string} format
     * @example
     *
     * const any_date = '3/6/19'
     *
     * _d.subtractDays(any_date, 1, '-')
     * // => 03-05-2019
     *
     * _d.subtractDays(any_date, 2, '.')
     * // => 03.04.2019
     *
     * _d.subtractDays(any_date, 3, 'uk')
     * // => 03 Mar 2019
     */
    const subtractDays = require('./methods/subtractDays')

    /*------------------------------------------------------------------------*/

    // Date
    datedash.date = date
    datedash.now = now
    datedash.getTimestamp = getTimestamp
    datedash.isDate = isDate

    // Math
    datedash.addDays = addDays
    datedash.subtractDays = subtractDays

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     * @private
     * @static
     * @memberOf _d
     * @type {string}
     */
    datedash.VERSION = VERSION

    /*--------------------------------------------------------------------------*/

    if (freeModule) {
        // Export for Node.js.
        ;
        (freeModule.exports = datedash)._d = datedash

        // Export for CommonJS support.
        freeExports._d = datedash
    } else {
        // Export to the global object.
        root._d = datedash
    }
}.call(this))