require ('ansicolor').nice
const log = require ('ololog').configure ({locate: false})
const _ = require('lodash')

export const error = (method: string, err: any) => {
	log.lightYellow(`${method} ERROR:`, err.message)
	return {
		success: false,
		method: method,
		info: _.assign({}, err)
	}
}
