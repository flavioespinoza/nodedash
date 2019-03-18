import express from 'express';
interface Props {
    url: string;
    routes: Array<{}>;
}
/** -- App -----------------------------------------------------------------------
 *
 * App
 *
 * @static
 * @memberOf _node
 * @category App
 * @param {object} options
 * @param {{options:url}} url
 * @param {{options:routes}} routes
 * @example
 *
 * const _node = require('node_dash')
 *
 * const PORT = process.env.PORT || 6001
 * const routes = {} // See _node.routes() method for configuration
 * const options = {
 * 	url: 'yoursite.com',
 * 	routes: routes
 * }
 *
 * const app = new _node.App(options).app
 *
 * app.listen(PORT, () => {
 * 	console.log(`app listening on port: ${PORT}`)
 * })
 * //=> app listening on port: 6001
 *
 */
export default class App {
    url: string;
    routes: Array<{}>;
    constructor(props: Props);
    app: express.Application;
    private _config;
    private _market_name;
    private _url;
    private _routes;
    private _routes2;
    private _balls;
    private _rest_client;
    private _rest_client2;
    private _get_data;
}
export {};
