/// <reference path='./index.d.ts' />
import bodyParser = require('body-parser')
import router from 'express'
import axios from 'axios'
import { error } from './error'
import log from 'ololog'
import App from './app'
import _ from 'lodash'
import { Response, Request } from 'express-serve-static-core'
import { NextFunction } from 'connect'

const PORT = 8080

const routes = [
	{
		method: 'get',
		route: '/home',
		name: 'home',
		query: {
			method: 'authenticate',
			params: {
				username: 'flavioespinoza',
				email: 'flavio.espinoza@gmail.com'
			}
		},
		cb: (req: Request, res: Response) => {

			const keys = _.keys(req)

			res.status(200).send({
				route: '/',
				name: 'home',
				keys: keys
			})

		}
	},
	{
		method: 'get',
		route: '/market_list',
		name: 'market_list',
		body: {
			query: {
				method: 'market_list',
				params: {
					exchange: 'hitbtc',
					interval: 15,
					limit: 20,
					market_list: [
						{
							base: 'BTC',
							quote: 'USDT',
							symbol: 'BTC/USDT'
						},
						{
							base: 'ETH',
							quote: 'USDT',
							symbol: 'ETH/USDT'
						},
						{
							base: 'ADA',
							quote: 'BTC',
							symbol: 'ADA/BTC'
						}
					]
				}
			}
		},
		cb: (req: Request, res: Response) => {
			log.blue(req)
			console.log(req)

			res.status(200).send({
				route: '/market_list',
				name: 'market_list'
			})
		}
	}
]

const app = new App({url: 'https://mydash.com', routes: routes}).app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(PORT, () => {
	log.magenta(`listening on port: ${PORT}`)
})

