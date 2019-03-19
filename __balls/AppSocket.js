"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const log_log_1 = __importDefault(require("@flavioespinoza/log_log"));
const lodash_1 = __importDefault(require("lodash"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importStar(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const socket_io_1 = __importDefault(require("socket.io"));
// load NODE_ENV from .env
dotenv_1.default.load();
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
class BuildRouter {
    constructor(routeList, router) {
        this.routeList = routeList;
        this.router = express_1.Router();
    }
    init() {
        lodash_1.default.each(this.routeList, (obj) => {
            if (obj.method === 'get') {
                this.router.get(obj.route, (req, res, next) => {
                    res.send({
                        method: 'get',
                        route: obj.route,
                        sucesss: true
                    });
                });
            }
            else if (obj.method === 'post') {
                this.router.post(obj.route, (req, res, next) => {
                    res.send({
                        method: 'post',
                        route: obj.route,
                        sucesss: true
                    });
                });
            }
            else if (obj.method === 'put') {
                this.router.put(obj.route, (req, res, next) => {
                    res.send({
                        method: 'put',
                        route: obj.route,
                        sucesss: true
                    });
                });
            }
        });
        return this.router;
    }
}
exports.BuildRouter = BuildRouter;
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
class AppSocket {
    constructor(port, router) {
        this.port = port | 6001;
        this.router = router;
    }
    init() {
        const logger = morgan_1.default('combigned');
        const app = express_1.default();
        app.use(logger);
        app.use(cors_1.default());
        app.use(body_parser_1.default());
        app.use(this.router);
        const server = app.listen(this.port, () => {
            log_log_1.default.info(`app listening on PORT: ${this.port}`);
        });
        const _io = socket_io_1.default.listen(server);
        return app;
    }
}
module.exports = AppSocket;