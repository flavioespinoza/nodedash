import { expect } from 'chai'
import { User } from './User'

describe('Test class User', () => {
	it('User-greet', () => {
		// Arguments
		const name1 = 'Oha'
		const greeting1 = 'Oha'

		// Method call
		const user = new User(name1, greeting1)
		user.greet()
	})

	it('User-name', () => {
		// Arguments
		const name2 = 'Oha'
		const greeting2 = 'Oha'
		const name3 = 'Oha'

		// Property call
		const user = new User(name2, greeting2)
		user.name = name3
		const result = user.name

		// Expect result
		expect(result).equals(name3)
	})

	it('User-greeting', () => {
		// Arguments
		const name4 = 'Oha'
		const greeting3 = 'Oha'
		const greeting4 = 'Oha'

		// Property call
		const user = new User(name4, greeting3)
		user.greeting = greeting4
		const result = user.greeting

		// Expect result
		expect(result).equals(greeting4)
	})
})
