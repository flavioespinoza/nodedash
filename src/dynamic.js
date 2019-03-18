const _node = {

}

import('./app.js').then((mod) => {
	_node.App = mod.default
})
import('./user').then((mod) => {
	_node.User = mod.default
})
import('./error').then((mod) => {
	_node.error = mod.default
})

export default _node
