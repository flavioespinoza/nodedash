/**
 * @param  {} 'ololog'
 * @param  {false}} .configure({locate
 */
const log = require('ololog').configure({
	locate: false
})

import app from './app'

const PORT = 7000

app.listen(PORT, function () {


	log.yellow('Express server listening on port ', PORT)
})
