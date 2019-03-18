import express = require('express')
import bodyParser = require('body-parser')
import axios from 'axios'
import { Request, Response } from 'express'
import * as _ from 'lodash'
import { error } from './error'
import { NextFunction } from 'connect'

const log = require('ololog').configure({locate: false})

const crypto_arr: Array<object> = []
const router = express.Router()

let user_agent: any

interface Props {
	url: string
	routes: Array<{}>
}

/**
 * Node Express App
 *
 * @static
 * @memberOf _n
 * @since 1.0.0
 * @category _node
 * @param  {} {this.app=express(
 * @example
 *
 * const _f = require('flodash')
 *
 * const PORT = 7001
 * _f.app.listen(PORT, () => {
 *		console.log()
 * })
 *
 *
 */
export default class App {
	url: string
	routes: Array<{}>

	constructor(props: Props) {
		this.url = props.url
		this.routes = props.routes
		this.app = express()
		this._config()
		this._routes()
	}

	public app: express.Application

	private _config(): void {
		this.app.use(bodyParser.json())
		this.app.use(bodyParser.urlencoded({extended: false}))
		this.app.use((req: Request, res: Response, next: NextFunction) => {
			user_agent = req.get('User-Agent')
			next()
		})
	}

	private _market_name(sym: string) {
		return sym.replace('/', '_')
	}

	private _url(base: string, quote: string, limit: number) {
		let _limit = Math.floor(limit)
		return `https://min-api.cryptocompare.com/data/histominute?fsym=${base}&tsym=${quote}&limit=${_limit}&aggregate=1&e=hitbtc`
	}

	private _routes() {

		_.each(this.routes, (route: any) => {
			if (route.method === 'get') {
				router.get(route.route, route.cb)

			} else if (route.method === 'post') {
				router.post(route.route, route.cb)
			}
		})

		this.app.use('/', router)
	}

	private _routes2() {
		router.get('/', (req: Request, res: Response) => {
			this._get_data('/').then(response => {
				let exchange_name = 'hitbtc'
				let market_name = 'BTC_USD'

				log.blue('crypto_arr', crypto_arr.length)
				log.blue('crypto_arr', crypto_arr[0])

				_.each(crypto_arr, (candle_obj: any) => {
					let _id = `${exchange_name}__${market_name}___${candle_obj.timestamp}`

					let update = {
						index: 'hitbtc_candles_btc_usd',
						type: 'hitbtc_market',
						id: _id,
						body: candle_obj
					}
				})

				res.status(200).send(crypto_arr)
			})
		})

		router.post('/', (req: Request, res: Response) => {
			log.lightYellow('post', '/')

			const data = req.body
			res.status(200).send(data)
		})

		this.app.use('/', router)
	}

	private _balls = (req: Request, res: Response, next: NextFunction) => {
		next()
	}

	private _rest_client(market_name: string, url: string, market_info: object) {
		axios({
			url: url,
			method: 'get'
		})
			.then((res: object) => {
			})
			.catch((err: object) => {
				error('_rest_client', err)
			})
	}

	private _rest_client2(market_name: string, url: string, market_info: object): Promise<string> {
		log.green('market_name', market_name)
		log.cyan('url', url)
		log.blue('market_info', market_info)

		return new Promise<string>((resolve, reject) => {
			axios({
				url: url,
				method: 'get'
			})
				.then(res => {
					let res_data = res.data

					_.each(res_data.Data, (obj: any) => {
						let timestamp = obj.time * 1000

						let date = new Date(timestamp)

						obj.volume = _.add(obj.volumeto, obj.volumeto)

						crypto_arr.push({
							timestamp: timestamp,
							date: date,
							close: obj.close,
							high: obj.high,
							low: obj.low,
							open: obj.open,
							volume: obj.volumefrom,
							short: null,
							long: null
						})
					})

					resolve(res_data)
				})
				.catch(err => {
					error('_rest_client', err)
				})
		})
	}

	private _get_data = async (route: string) => {
		let _test_markets = [
			{
				base: 'BTC',
				quote: 'USDT',
				symbol: 'BTC/USDT'
			}
		]

		let _market_name = this._market_name(_test_markets[0].symbol)
		let _base = _test_markets[0].base
		let _quote = _test_markets[0].quote

		let _url = this._url(_base, _quote, 2)

		await this._rest_client(_market_name, _url, _test_markets[0])

		return new Promise<string>((resolve, reject) => {
			resolve(route)
		})
	}
}
