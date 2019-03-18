/**
 * @license
 * nodedash <https://github.com/flavioespinoza/nodedash>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://github.com/flavioespinoza/nodedash/blob/master/LICENSE>
 * Based on lodash.js 5.0.0 <https://lodash.com/>
 * Based on lodash.js by John-David Dalton <https://github.com/jdalton>
 */

import * as App from './app'
import * as User from './user'
import * as error from './error'

;(function() {
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
	 * @name _n
	 * @constructor
	 * @category Seq
	 * @param {*} value The value to wrap in a `nodedash` instance.
	 * @returns {Object} Returns the new `nodedash` wrapper instance.
	 */
	function nodedash() {
		// No operation performed.
	}

	/*------------------------------------------------------------------------*/

	/**
	 * Using `yarn`
	 *
	 * @static
	 * @memberOf _n
	 * @since 1.0.0
	 * @category Install
	 * @example
	 *
	 * yarn add nodedash
	 */
	this.yarn = () => {
		return null
	}

	/**
	 * Using `npm`
	 *
	 * @static
	 * @memberOf _n
	 * @since 1.0.0
	 * @category Install
	 * @example
	 *
	 * npm i nodedash
	 */
	this.npm = () => {
		return null
	}

	/**
	 * Import using `esm` or `TypeScript`
	 *
	 * @static
	 * @memberOf _n
	 * @since 1.0.0
	 * @category Import
	 * @example
	 *
	 * import _n from 'nodedash'
	 *
	 * const options = {
	 * 		name: '_nodedash'
	 * 		url: 'localhost'
	 * }
	 * _n.app(6001, options, (err, res) => {
	 *		console.log(res.status)
	 * })
	 * // > _nodedash is now listening on http://localhost:6001
	 */
	this.import = () => {
		return null
	}

	/**
	 * Import individual ES Modules using `esm` or `TypeScript`
	 *
	 * @static
	 * @memberOf _n
	 * @since 1.0.0
	 * @category Import
	 * @example
	 *
	 * import { app } from 'nodedash'
	 */
	this.modules = () => {
		return null
	}

	/*------------------------------------------------------------------------*/

	/**
	 * Import using `require`
	 *
	 * @static
	 * @memberOf _n
	 * @since 1.0.0
	 * @category Require
	 * @example
	 *
	 * const _n = require('nodedash')
	 */
	this.require = () => {}

	/*------------------------------------------------------------------------*/

	// TYPESCRIPT NODE

	/**
	 * Node App Server
	 *
	 * @static
	 * @memberOf _n
	 * @since 1.0.0
	 * @category App
	 * @param  {} {this.app=express(
	 * @example
	 *
	 * const _n = require('nodedash')
	 *
	 * const routes = [
	 *     {
	 * 		 method: 'get',
	 * 		 route: '/home',
	 * 		 name: 'home',
	 * 		 cb: (req: Request, res: Response) => {
	 * 			 res.status(200).send({
	 * 				 route: '/',
	 * 				 name: 'home'
	 * 			 })
	 * 		 }
	 * 	 },
	 *     {
	 * 		 method: 'get',
	 * 		 route: '/market_list',
	 * 		 name: 'market_list',
	 * 		 cb: (req: Request, res: Response) => {
	 * 			 res.status(200).send({
	 * 				 route: '/market_list',
	 * 				 name: 'market_list'
	 * 			 })
	 * 		 }
	 * 	 }
	 * ]
	 *
	 * const PORT = 8080
	 *
	 * const app = new _n.App({url: 'https://mydash.com', routes: routes}).app
	 *
	 * app.use(bodyParser.json())
	 * app.use(bodyParser.urlencoded({extended: true}))
	 *
	 * app.listen(PORT, () => { log.magenta(`listening on port: ${PORT}`) })
	 *
	 */
	this.App = (url, routes) => {
		return new App({url, routes})
	}

	/*------------------------------------------------------------------------*/

	/**
	 * User
	 *
	 * @static
	 * @memberOf _n
	 * @since 1.0.0
	 * @category App
	 * @param  {} {this.app=express(
	 * @example
	 *
	 * const _n = require('nodedash')
	 *
	 * const user = new _n.User({name: 'flavio', email: 'flavio.espinoza@gmail.com'})
	 */
	this.User = User


	/*------------------------------------------------------------------------*/

	/**
	 * Error
	 *
	 * @static
	 * @memberOf _n
	 * @since 1.0.0
	 * @category Util
	 * @param  {} {this.app=express(
	 * @example
	 *
	 * const _n = require('nodedash')
	 * const axios = require('axios')
	 *
	 * const getStuff = async (url) => {
     * 	  try {
     * 		return await axios(url)
     * 	  } catch (err) {
     * 	  	return _n.error('getStuff', err)
     * 	  }
     * }
	 *
	 *
	 * console.log(getStuff('https://bullshit.foobars'))
	 *  // => getStuff ERROR: getaddrinfo ENOTFOUND bullshit.foobars bullshit.foobars:443
	 *
	 *
	 * console.log(getStuff('https://api.hitbtc.com/api/2/public/ticker/btcusd'))
	 *  // => {
     * 	// 		 ask: '4015.72',
     *  // 		 bid: '4015.71',
     *  // 		 last: '4015.78',
     *  // 		 open: '3973.59',
     *  // 		 low: '3951.00',
     *  // 		 high: '4034.32',
     *  // 		 volume: '11198.74531',
     *  // 		 volumeQuote: '44641165.4241766',
     *  // 		 timestamp: '2019-03-18T03:41:51.571Z',
     *  // 		 symbol: 'BTCUSD'
     *  // 	  }
	 *
	 */
	this.error = error


	/**
	 * The semantic version number.
	 * @private
	 * @static
	 * @memberOf _n
	 * @type {string}
	 */
	nodedash.VERSION = VERSION

	/*--------------------------------------------------------------------------*/

	if (freeModule) {
		// Export for Node.js.
		;(freeModule.exports = nodedash)._n = nodedash

		// Export for CommonJS support.
		freeExports._n = nodedash
	} else {
		// Export to the global object.
		root._n = nodedash
	}
}.call(this))
