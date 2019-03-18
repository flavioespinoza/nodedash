import App from './app'
import User from './user'
import error from './error'
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

	/*-- Module ----------------------------------------------------------------------*/

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

	/*-- Version ----------------------------------------------------------------------*/

	/**
	 * The semantic version number.
	 *
	 * @static
	 * @memberOf _n
	 * @type {string}
	 *
	 */
	nodedash.VERSION = VERSION

	/*-- Imports ------------------------------------------------------------------------*/

	/*-- Express w/Require ------------------------------------------------------------------------*/

	/**
	 * Node Express app w/Require
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
	 * const app = new _node.Express(options).app
	 *
	 * app.listen(PORT, () => {
	 * 	console.log(`app listening on port: ${PORT}`)
	 * })
	 * //=> app listening on port: 6001
	 *
	 */

	 nodedash.Express = require('./express')


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
	nodedash.App = App

	/*-- User ------------------------------------------------------------------------*/
	/**
	 * @param {{User:Class}} ES6 Class
	 * */
	nodedash.User = User

	/*-- error ------------------------------------------------------------------------*/
	/**
	 * @param {{error:method}} Handler for errors
	 * */
	nodedash.error = error

	/*-- Export ------------------------------------------------------------------------*/

	if (freeModule) {
		// Export for Node.js.
		;(freeModule.exports = nodedash)._node = nodedash

		// Export for CommonJS support.
		freeExports._node = nodedash
	} else {
		// Export to the global object.
		root._node = nodedash
	}
}.call(this))
