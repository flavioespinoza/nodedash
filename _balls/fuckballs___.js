'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function add(a, b) {
    return a + b;
}

const subtract = (x, y) => {
    return x - y;
};

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
    console.log(`${method} ERROR:`, err.message);
    return {
        success: false,
        method: method,
        info: Object.assign({}, err)
    };
}

/* TREE-SHAKING */

exports.add = add;
exports.subtract = subtract;
exports.error = error;

const _node = {}

_node.add = add
_node.subtract = subtract
_node.error = error

module.exports._node = _node

