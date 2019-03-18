const _ = require('lodash')
const _log = require('@flavioespinoza/log_log')
const { log } = require('@flavioespinoza/log_log')

declare const ISomeObject: {
	success: any;
	method: any;
	info: any;
	[key: string]: any;
}


function _mapError(method: string, err: any) {
	let res = {
		success: false,
		method: method,
		info: 'Error'
	}
	if (typeof err === 'object') {

		let keys = _.keys(err)

		res.info = `Error occured at: ${new Date()}`

		_.each(keys, (key: string) => {
			res[key] = _.toString(err[key])
		})

	} else if (typeof err === 'string') {
		res.info = `Error occured at: ${new Date()}: ${err}`
	} else {
		res.info = `Unkown Error occured at: ${new Date()}`
	}
	return res
}

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
export function _error(method: string, err: any) {
    let _info = _mapError(method, err);
    _log.error(_info);
    return _info;
}
