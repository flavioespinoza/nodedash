
/**
 * Node App Server
 *
 * @static
 * @memberOf _n
 * @since 1.0.0
 * @category _node
 * @param  {} {this.app=express(
 * @example
 *
 * const _f = require('flodash')
 *
 * const PORT = 7001
 * _f.app.listen(PORT, () => {
 *		console.log()
 * })
 *
 *
 */
export default class User {

	name: string
	greeting: string

	constructor (name: string, greeting: string) {
		this.name = name
		this.greeting = greeting
	}

	greet () {
		return `Hello ${this.name}! ${this.greeting}`
	}
}

