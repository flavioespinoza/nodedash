
/**
 * User
 *
 * @static
 * @memberOf _f
 * @since 1.0.0
 * @category Import
 * @param  {} {this.app=express(
 * @example
 *
 * const _f = require('flodash')
 *
 * const PORT = 7001
 * _f.user = new User({name: 'flavio', email: 'flavio.espinoza@gmail.com'})
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