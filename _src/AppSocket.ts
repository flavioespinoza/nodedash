import _log from '@flavioespinoza/log_log';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application, Router } from 'express';
import morgan from 'morgan';
import io from 'socket.io';
import SocketEvents from './SocketEvents';

// load NODE_ENV from .env
dotenv.load()

const PORT = process.env.PORT || 6001
const routes = Router()
const logger = morgan('combined')

routes.get('/', (req, res, next) => {
    res.send({
        route: '/',
        success: true
    })
})

routes.get('/:route_name', (req, res, next) => {
    let route_name = req.params.route_name
    res.send({
        route: route_name,
        success: true
    })
})

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

const app = express()

app.use(logger)
app.use(cors())
app.use(bodyParser())
app.use(routes)

const server = app.listen(PORT, () => {
    _log.info(`app listening on PORT: ${PORT}`)
})

const _io = io.listen(server)

SocketEvents(_io)


