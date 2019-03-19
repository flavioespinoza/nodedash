const _ = require('lodash')
const _log = require('@flavioespinoza/log_log')

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

function error(method: string, err: any) {
	let _info = _mapError(method, err)
	_log.error(_info)
	return _info
}

export { error as _error }
export default error
