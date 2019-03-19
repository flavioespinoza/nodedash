/// <reference path='./custom.d.ts' />
import bodyParser from 'body-parser';
import log from 'ololog';
import App from './ExpressApp';
const routes = [
    {
        method: 'get',
        route: '/home',
        name: 'home',
        cb: (req, res) => {
            res.status(200).send({
                route: '/',
                name: 'home'
            });
        }
    },
    {
        method: 'get',
        route: '/market_list',
        name: 'market_list',
        cb: (req, res) => {
            res.status(200).send({
                route: '/market_list',
                name: 'market_list'
            });
        }
    }
];
const PORT = 8080;
const app = new App({ url: 'https://mydash.com', routes: routes }).app;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
    log.magenta(`listening on port: ${PORT}`);
});
//# sourceMappingURL=server.js.map