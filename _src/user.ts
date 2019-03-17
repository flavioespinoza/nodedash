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

