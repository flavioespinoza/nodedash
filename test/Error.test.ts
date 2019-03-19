import { expect } from 'chai'
import { Error } from './Error'
import _ from 'lodash'
import _log from '@flavioespinoza/log_log'

describe('Test class Error', () => {
    it('Error-_handle', () => {
        // Arguments
        const method1 = 'Oha'
        const err1 = undefined

        // Method call
        const error = new Error(method1, err1)
        error._handle()
    })

    it('Error-method', () => {
        // Arguments
        const method2 = 'Oha'
        const err2 = undefined
        const method3 = 'Oha'

        // Property call
        const error = new Error(method2, err2)
        error.method = method3
        const result = error.method

        // Expect result
        expect(result).equals(method3)
    })

    it('Error-err', () => {
        // Arguments
        const method4 = 'Oha'
        const err3 = undefined
        const err4 = 'Oha'

        // Property call
        const error = new Error(method4, err3)
        error.err = err4
        const result = error.err

        // Expect result
        expect(result).equals(err4)
    })
})
