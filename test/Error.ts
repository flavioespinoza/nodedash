import _ from 'lodash'
import _log from '@flavioespinoza/log_log'

class Error {
	method: string
	err: string

	constructor(method: string, err: any) {
		this.method = method
		this.err = err
	}

	private _mapError(method: string, err: any) {
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

	public _handle() {
		let _info = this._mapError(this.method, this.err)
		_log.error(_info)
		return _info
	}
}

export { Error }
