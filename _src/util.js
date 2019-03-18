const _ = require('lodash')
export function _mapError(method, err) {
	let res = {
		success: false,
		method: method,
		info: undefined
	}
	if (typeof err === 'object') {
		let keys = _.keys(err)
		res.info = `Error occured at: ${new Date()}`
		_.each(keys, (key) => {
			res[key] = _.toString(err[key])
		})
	} else if (typeof err === 'string') {
		res.info = `Error occured at: ${new Date()}: ${err}`
	} else {
		res.info = `Unkown Error occured at: ${new Date()}`
	}
	return res
}
