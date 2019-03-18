import App from './app'
import User from './user'
import error from './error'
import server from './server'

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
	this.App = App

	this.User = User

	this.server = server

	/*------------------------------------------------------------------------*/

	/**
	 * Error Handler
	 *
	 * @static
	 * @memberOf _n
	 * @since 1.0.0
	 * @category Util
	 * @param  {string} Method Name
	 * @param  {object} Error Object
	 * @returns {object} and logs error in console
	 * @example
	 *
	 * const _n = require('nodedash')
	 * const axios = require('axios')
	 *
	 * const getStuff = async (() => {
	 * 	try {
	 * 		const getData = await axios('https://bullshit.foobars')
	 * 		return getData
	 * 	} catch (err) {
	 * 		return _n.error('getStuff', err)
	 * 	}
	 * })
	 * // => { method: 'getStuff', error: { msg: '404 not found' }}
	 */
	this.error = error

	/*------------------------------------------------------------------------*/

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
