import _log, { log } from '@flavioespinoza/log_log'
import _ from 'lodash'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { Router } from 'express'
import morgan from 'morgan'
import io from 'socket.io'

// load NODE_ENV from .env
dotenv.load()

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

export class BuildRouter {
    routeList: Array<any>

    constructor(routeList: Array<any>, router: any) {
        this.routeList = routeList
        this.router = Router()
    }

    public router: express.Router

    public init() {
        
        _.each(this.routeList, (obj: any) => {

            if (obj.method === 'get') {
                this.router.get(obj.route, (req, res, next) => {
                    res.send({
                        method: 'get',
                        route: obj.route,
                        sucesss: true
                    })
                })
            } else if (obj.method === 'post') {
                this.router.post(obj.route, (req, res, next) => {
                    res.send({
                        method: 'post',
                        route: obj.route,
                        sucesss: true
                    })
                })
            } else if (obj.method === 'put') {
                this.router.put(obj.route, (req, res, next) => {
                    res.send({
                        method: 'put',
                        route: obj.route,
                        sucesss: true
                    })
                })
            }

        })

        return this.router
    }
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
    port: number
    router: any

    constructor(port: number, router: any) {
        this.port = port | 6001
        this.router = router
    }

    public init() {

        const logger = morgan('combigned')

        const app = express()

        app.use(logger)
        app.use(cors())
        app.use(bodyParser())
        app.use(this.router)

        const server = app.listen(this.port, () => {
            _log.info(`app listening on PORT: ${this.port}`)
        })

        const _io = io.listen(server)


        return app
    }
}
