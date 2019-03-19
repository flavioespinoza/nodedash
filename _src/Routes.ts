import { Router as _router } from 'express'
import _ from 'lodash'

interface X {
    list: object
}

export default class Routes {

}

interface Balls {
    list: object
}

export class RoutesList {
    list: any
    constructor(props: Balls) {
        this.list = props.list
    }
    public _list() {
        return this.list
    }
}
