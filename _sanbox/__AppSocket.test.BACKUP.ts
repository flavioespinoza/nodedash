/*
 * File generated by Test generator (dotup.dotup-vscode-test-generator)
 * Date: 2019-03-19 11:04:34
*/
import { expect } from 'chai';
import { BuildRouter } from './AppSocket';
import AppSocket from './AppSocket';
import _log, { log } from "@flavioespinoza/log_log";
import _ from "lodash";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Router } from "express";
import morgan from "morgan";
import io from "socket.io";
import SocketEvents from "./SocketEvents";

describe('Test class BuildRouter', () => {

    it('BuildRouter-init', () => {
        // Arguments
        
        const router1 = Router();
        
        const routeList1 = [
            {
                method: 'get',
                route: 'home',
                params: {}
            },
            {
                method: 'get',
                route: 'profile',
                params: {}
            },
            {
                method: 'get',
                route: 'settings',
                params: {}
            }
        ]
        // Method call
        const buildRouter = new BuildRouter(routeList1, router1);
        buildRouter.init();
    });

    it('BuildRouter-routeList', () => {
        // Arguments
        const routeList2 = [
            {
                method: 'get',
                route: 'home',
                params: {}
            },
            {
                method: 'get',
                route: 'profile',
                params: {}
            },
            {
                method: 'get',
                route: 'settings',
                params: {}
            }
        ]
        
        const routeList3 = [
            {
                method: 'get',
                route: 'home',
                params: {}
            },
            {
                method: 'get',
                route: 'profile',
                params: {}
            },
            {
                method: 'get',
                route: 'settings',
                params: {}
            }
        ]

        const router2 = Router();

        // Property call
        const buildRouter = new BuildRouter(routeList2, router2);
        buildRouter.routeList = routeList3;
        const result = buildRouter.routeList;

        // Expect result
        expect(result).equals(routeList3);
    });

    it('BuildRouter-router', () => {
        // Arguments
        const routeList4 = [
            {
                method: 'get',
                route: 'home',
                params: {}
            },
            {
                method: 'get',
                route: 'profile',
                params: {}
            },
            {
                method: 'get',
                route: 'settings',
                params: {}
            }
        ];
        const router3 = Router();
        const router4 = Router();

        // Property call
        const buildRouter = new BuildRouter(routeList4, router3);
        buildRouter.router = router4;
        const result = buildRouter.router;

        // Expect result
        expect(result).equals(router4);
    });

});

describe('Test class AppSocket', () => {

    it('AppSocket-init', () => {
        // Arguments
        const port1 = 10;
        const router5 = undefined;

        // Method call
        const appSocket = new AppSocket(port1, router5);
        appSocket.init();
    });

    it('AppSocket-port', () => {
        // Arguments
        const port2 = 10;
        const router6 = undefined;
        const port3 = 10;

        // Property call
        const appSocket = new AppSocket(port2, router6);
        appSocket.port = port3;
        const result = appSocket.port;

        // Expect result
        expect(result).equals(port3);
    });

    it('AppSocket-router', () => {
        // Arguments
        const port4 = 10;
        const router7 = undefined;
        const router8 = undefined;

        // Property call
        const appSocket = new AppSocket(port4, router7);
        appSocket.router = router8;
        const result = appSocket.router;

        // Expect result
        expect(result).equals(router8);
    });

});