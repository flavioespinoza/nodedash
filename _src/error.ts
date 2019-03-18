require('ansicolor').nice
const log = require('ololog').configure({ locate: false })
const _ = require('lodash')

/**
 * Error
 *
 * @static
 * @memberOf _f
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
 * 	  try {
 * 	 	  return await axios(url)
 * 	  } catch (err) {
 * 	 	  return _n.error('getStuff', err)
 * 	 }
 * }
 *
 * console.log(getStuff('https://bullshit.foobars'))
 * // => getStuff ERROR: getaddrinfo ENOTFOUND bullshit.foobars bullshit.foobars:443
 *
 * console.log(getStuff('https://api.hitbtc.com/api/2/public/ticker/btcusd'))
 * // => { ask: '4015.72',
 * // 		 bid: '4015.71',
 * // 		 last: '4015.78',
 * // 		 open: '3973.59',
 * // 		 low: '3951.00',
 * // 		 high: '4034.32',
 * // 		 volume: '11198.74531',
 * // 		 volumeQuote: '44641165.4241766',
 * // 		 timestamp: '2019-03-18T03:41:51.571Z',
 * // 		 symbol: 'BTCUSD }
 *
 */
export const error = (method: string, err: any) => {
	log.lightYellow(`${method} ERROR:`, err.message)
	return {
		success: false,
		method: method,
		info: _.assign({}, err)
	}
}
