import log from 'ololog'
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

 export default function error(method: string, err: any) {
	log.lightYellow(`${method} ERROR:`, err.message)
	return {
		success: false,
		method: method,
		info: Object.assign({}, err)
	}
}
