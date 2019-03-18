'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var express = _interopDefault(require('express'));
var bodyParser = _interopDefault(require('body-parser'));
var axios = _interopDefault(require('axios'));
var _ = _interopDefault(require('lodash'));
var log = _interopDefault(require('ololog'));

/**
 * Error
 *
 * @static
 * @memberOf _n
 * @since 1.0.0
 * @category Import
 * @param  {} {this.app=express(
 * @example
 *
 * const _n = require('nodedash')
 *
 * const axios = require('axios')
 *
 * const getStuff = async (url) => {
 * 	try {
 * 		return await axios(url)
 * 	} catch (err) {
 * 		return _n.error('getStuff', err)
 * 	}
 * }
 *
 * console.log(getStuff('https://bullshit.foobars'))
 * // => getStuff ERROR: getaddrinfo ENOTFOUND bullshit.foobars bullshit.foobars:443
 */
function error(method, err) {
    log.lightYellow(`${method} ERROR:`, err.message);
    return {
        success: false,
        method: method,
        info: Object.assign({}, err)
    };
}

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const router = express.Router();
const crypto_arr = [];
let user_agent;
/** -- App -----------------------------------------------------------------------
 *
 * App
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
                _.each(crypto_arr, (candle_obj) => {
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
        axios({
            url: url,
            method: 'get'
        })
            .then((res) => { })
            .catch((err) => {
            error('_rest_client', err);
        });
    }
    _rest_client2(market_name, url, market_info) {
        return new Promise((resolve, reject) => {
            axios({
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
                error('_rest_client', err);
            });
        });
    }
}

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
class User {
    constructor(name, greeting) {
        this.name = name;
        this.greeting = greeting;
    }
    greet() {
        return `Hello ${this.name}! ${this.greeting}`;
    }
}

(function() {
	/** Used as the semantic version number. */
	var __package = require('./package.json');

	var VERSION = __package.version;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/*--------------------------------------------------------------------------*/

	/** Built-in value references. */
	var Symbol = root.Symbol;

	/*-- Module ----------------------------------------------------------------------*/

	/**
	 * @private
	 * @name _node
	 * @constructor
	 * @category Seq
	 * @param {*} value The value to wrap in a `nodedash` instance.
	 * @returns {Object} Returns the new `nodedash` wrapper instance.
	 */
	function nodedash() {
		// No operation performed.
	}

	/*-- Version ----------------------------------------------------------------------*/

	/**
	 * The semantic version number.
	 *
	 * @static
	 * @memberOf _node
	 * @type {string}
	 *
	 */
	nodedash.VERSION = VERSION;

	/*-- Imports ------------------------------------------------------------------------*/

	/*-- App ------------------------------------------------------------------------*/
	/**
	 * Node Express app
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

	/**
	 * @param {{App:Class}}  Express App Class
	 * */
	nodedash.App = App;

	/*-- User ------------------------------------------------------------------------*/
	/**
	 * @param {{User:Class}} ES6 Class
	 * */
	nodedash.User = User;

	/*-- error ------------------------------------------------------------------------*/
	/**
	 * @param {{error:method}} Handler for errors
	 * */
	nodedash.error = error;

	/*-- Export ------------------------------------------------------------------------*/

	if (freeModule) {
(freeModule.exports = nodedash)._node = nodedash;

		// Export for CommonJS support.
		freeExports._node = nodedash;
	} else {
		// Export to the global object.
		root._node = nodedash;
	}
}.call(undefined));
