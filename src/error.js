import _log from '@flavioespinoza/log_log';
import { _mapError } from './util';
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
export function error(method, err) {
    let _info = _mapError(method, err);
    _log.error(_info);
    return _info;
}
