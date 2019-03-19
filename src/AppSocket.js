import _log, { log } from '@flavioespinoza/log_log';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Router } from 'express';
import morgan from 'morgan';
import io from 'socket.io';
import SocketEvents from './SocketEvents';
import { RoutesList } from './Routes';
const _list = [
    {
        method: 'get', route: 'home'
    },
    {
        method: 'get', route: 'profile'
    },
    {
        method: 'get', route: 'settings'
    }
];
const list = new RoutesList({ list: _list }).list();
log.magenta(list);
// load NODE_ENV from .env
dotenv.load();
const logger = morgan('combined');
const PORT = process.env.PORT || 6001;
const _routes = Router();
_routes.get('/home', (req, res, next) => {
    res.send({
        route: '/home',
        sucesss: true
    });
});
_routes.get('/profile', (req, res, next) => {
    res.send({
        route: '/profile',
        sucesss: true
    });
});
_routes.get('/settings', (req, res, next) => {
    res.send({
        route: '/settings',
        sucesss: true
    });
});
/**
 * Express App Server with Socket.io WebSocket
 *
 * @static
 * @memberOf _node
 * @category App
 * @param {{port:Number}} Number 4 Digit integer that the server and socket are listens on
 * @param {{routes:Array}} Array of strings designating route names
 * @example
 *
 * const port = 6001
 * const routes = _node.Router(['/', 'route_name_1', 'route_name_2'])
 *
 * const app = _node.AppSocket({ port, routes })
 *
 * */
const app = express();
app.use(logger);
app.use(cors());
app.use(bodyParser());
app.use(_routes);
const server = app.listen(PORT, () => {
    _log.info(`app listening on PORT: ${PORT}`);
});
const _io = io.listen(server);
SocketEvents(_io);
//# sourceMappingURL=AppSocket.js.map