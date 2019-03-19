declare const router: import("express-serve-static-core").Router;
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
declare const loginRegister: Array<any>;
export { loginRegister };
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
declare const authReqired: Array<any>;
export { authReqired };
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
declare const publicRoutes: Array<any>;
export { publicRoutes };
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
declare const routeList: Array<any>;
export { routeList };
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
declare function buildRoutes(list: any): void;
export { buildRoutes };
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
declare const KoaJwtAuth: any;
export { KoaJwtAuth };
export { router };
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
declare const KoaAppSocket: any[];
export default KoaAppSocket;
