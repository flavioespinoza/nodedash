import express from 'express';
/**
 *
 * Express Router
 *
 * @static
 * @memberOf _node
 * @category App
 * @param {{routeList:Array}} Array of Objects with http.method and route name
 * @param {{routeObj:Object}} Object Each object has two properties `method` and `route` and `params`
 * @param {{routeObj.method}} String `get` or `post` or `put`
 * @param {{routeObj.route}} String Route name `home` or `profile` or `settings` or `whatevs :)`
 * @param {{routeObj.params}} Object JSON request query specific to your application
 * @returns {{router:expres.Router}} Router of specified routes
 * @example
 *
 * const routeList = [
 *      {
 *          method: 'get',
 *          route: 'home',
 *          params: {}
 *      },
 *      {
 *          method: 'get',
 *          route: 'profile',
 *          params: {}
 *      },
 *      {
 *          method: 'get',
 *          route: 'settings',
 *          params: {}
 *      }
 * ]
 *
 * const router = new _node.BuildRoutes(routeList).init()
 *
 * const port = 6001
 *
 * const app = new _node.AppSocket(port, router).init()
 *
 * */
export declare class BuildRouter {
    routeList: Array<any>;
    constructor(routeList: Array<any>, router: any);
    router: express.Router;
    init(): express.Router;
}
/**
 * Express App with Socket.io WebSocket
 *
 * @static
 * @memberOf _node
 * @category App
 * @param {{port:Number}} Number 4 Digit integer that the server and socket are listens on
 * @param {{router:express.Router}} Router built with the _node.BuildRoutes class
 * @returns {{app:express.Application}} Express App with Socket.io Websocket
 * @example
 *
 * const router = "Note: the router is the second @param and is built with the BuidlRouter class, See:" _node.BuildRouter
 *
 * const port = 6001
 *
 * const app = new _node.AppSocket(port, router).init()
 *
 * */
export default class AppSocket {
    port: number;
    router: any;
    constructor(port: number, router: any);
    init(): import("express-serve-static-core").Express;
}
