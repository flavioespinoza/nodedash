/**
 * @license
 * datedash <https://github.com/flavioespinoza/datedash>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://github.com/flavioespinoza/datedash/blob/master/LICENSE>
 * Based on lodash.js 5.0.0 <https://lodash.com/>
 * Based on lodash.js by John-David Dalton <https://github.com/jdalton>
 */
;
(function() {

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