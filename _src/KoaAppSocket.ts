import { Router } from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'
import { _error } from './Error'
import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import { Url } from 'url';

const router = Router()

const baseName = path.basename(module.filename)

const auth = (route: string) => {
    return route
}

async function getAuthenticatedUser() { }

/**
 * 
 * Login and register
 * 
 * @static
 * @memberOf _koa
 * @category App
 * @example
 * 
 * const loginRegister = [
 *    'register',
 *    'login'
 *    'forgot_password',
 *    'reset_password',
 * ]
 * 
 * */
const loginRegister: Array<any> = [
    'register',
    'login',
    'forgot_password',
    'reset_password',
]
export { loginRegister }


/**
 * Auth required routes
 * 
 * @static
 * @memberOf _koa
 * @category App
 * @example
 * 
 * const authReqired = [
 *    'profile',
 *    'secure_route',
 *    'settings'
 *    'logout',
 * ]
 * 
 * */
const authReqired: Array<any> = [
    'profile',
    'secure_route',
    'settings',
    'logout'
]
export { authReqired }


/**
 * Public routes
 * 
 * @static
 * @memberOf _koa
 * @category App
 * @example
 * 
 * const publicRoutes = [
 *    'welcome',
 *    'about'
 *    'employment',
 * ]
 * 
 * */
const publicRoutes: Array<any> = [
    'welcome',
    'abou',
    'employment'
]
export { publicRoutes }


/**
 * Koa Route List
 * 
 * @static
 * @memberOf _koa
 * @category App
 * @example
 * 
 * const routeList = [
 *   {
 *       domain: 'public',
 *       routes: publicDomain
 *   },
 *   {
 *       domain: 'loginRegister',
 *       routes: loginRegister
 *   },
 *   {
 *       domain: 'authReqired',
 *       routes: authReqired
 *   },
 * ]
 * 
 * */
const routeList: Array<any> = [
    {
        domain: 'publicRoutes',
        routes: publicRoutes
    },
    {
        domain: 'loginRegister',
        routes: loginRegister
    },
    {
        domain: 'authReqired',
        routes: authReqired
    },
]
export { routeList }


/**
 * 
 * Koa router
 * 
 * @static
 * @memberOf _koa
 * @category App
 * @example
 * 
 * const router = buildRoutes(routeList)
 * 
 * */
function buildRoutes(list: any) {
    _.each(list, (obj: any) => {
        return router.post('/register', (req, res, next) => {
            return auth(obj)
        })
    })
}
export { buildRoutes }


/**
 * 
 * Koa JSON Web Token Auth
 * 
 * @static
 * @memberOf _koa
 * @category App
 * @example
 * 
 * router.get('/secure_route', KoaJwtAuth, getAuthenticatedUser)
 * 
 * */
const KoaJwtAuth: any = `https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
export { KoaJwtAuth }


/**
 * Koa Router
 * 
 * @static
 * @memberOf _koa
 * @category App
 * @example
 * 
 * router.get('/login')
 * router.get('/secure_url', KoaJwtAuth, getAuthenticatedUser)
 * 
 * */
router.get('/list_simple', KoaJwtAuth, getAuthenticatedUser)
router.get('/list_compound', KoaJwtAuth, getAuthenticatedUser)
export { router }


/**
 * Koa App with  Socket.io WebSocket
 * 
 * @static
 * @memberOf _koa
 * @category App
 * @example
 * 
 * const port = process.env.PORT || 6001
 * const router = // See: _koa.router
 * 
 * const koa = new _koa.KoaAppSocket(port, router).init()
 * 
 * */
const KoaAppSocket = fs
    .readdirSync(path.join(__dirname))
    .filter(file => (file.indexOf('.') !== 0) && (file !== baseName) && (file.slice(-3) === '.js'))
    .map(file => require(path.join(__dirname, file)))

export default KoaAppSocket
