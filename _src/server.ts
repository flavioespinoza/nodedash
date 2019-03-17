/**
 * @param  {} 'ololog'
 * @param  {false}} .configure({locate
 */
import App from './app'
import axios from 'axios'
import _ from 'lodash'
import bodyParser from 'body-parser'
import { Response, Request } from 'express-serve-static-core'
import { NextFunction } from 'connect'

const multer = require('multer')
const upload = multer()

const log = require('ololog').configure({
	locate: false
})

const candel_obj_model = {
	time: 1539548160,
	close: 6398.75,
	high: 6399.07,
	low: 6395,
	open: 6398.17,
	volumefrom: 2.94,
	volumeto: 18810.2
}

const PORT = 8080
const routes = [
	{
		method: 'get',
		route: '/home',
		name: 'home',
		body: {
			query: {
				method: 'authenticate',
				params: {
					username: 'flavioespinoza',
					email: 'flavio.espinoza@gmail.com'
				}
			}
		},
		cb: (req: Request, res: Response, next: NextFunction) => {

			const user_agent = req.get('User-Agent')
			const body = req.body

			log.red(body)

			res.status(200).send({
				route: '/',
				name: 'home'
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
	},
	{
		method: 'get',
		route: '/market/btc_usdt',
		body: {
			query: {
				method: 'market',
				params: {
					exchange: 'hitbtc',
					interval: 15,
					limit: 20,
					market: {
						base: 'BTC',
						quote: 'USDT',
						symbol: 'BTC/USDT'
					}
				}
			}
		},
		cb: (req: Request, res: Response) => {
			log.blue(req.body)
			console.log(req)

			res.status(200).send({
				route: '/market/btc_usdt',
				name: '/market/btc_usdt'
			})
		}
	}
]

const app = new App({ url: 'balls', routes: routes }).app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(PORT, () => {
	log.lightYellow(`listening on port: ${PORT}`)
})
