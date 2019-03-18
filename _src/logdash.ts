import _ from 'lodash'
import util from 'util'
const c = require('ansi-colors')

export const _log = {
    deep: (data: any) => {
        const options = {
            showHidden: false,
            depth: null,
            colors: true
        }
        const inspect = util.inspect(data, options)
        console.log(inspect)
    },
    info: (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(c.yellow(`foo ${c.red.bold('red')} bar ${c.cyan('cyan')} baz`));
        console.log(c.bgBlue(` Info: ${msg} `))
    },
    error: (msg: any) => {
        c.red
    },
    alert: (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(c.bgYellowBright(c.black(` Alert: ${msg} `)))
    },
    warn: (msg: any) => {
        if (typeof msg === 'object') {
            msg = _.toString(msg)
        }
        console.log(c.bgMagenta(c.white(` Warn: ${msg} `)))
    }
}
