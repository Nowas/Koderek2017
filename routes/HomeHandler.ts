"use strict";
import * as express from 'express';
import { Router } from "express";
var i18n = require('i18n');
var fs = require('fs');

module Route {
    export class HomeHandler {       
        //public httpHandlers(passport:any) {
        public httpHandlers(): Router {
            let router = express.Router();

            router.get('/', 
                function(req:any, res) {
                    var repos = [];
                    res.render('index',{
                        baseUrl: req.baseUrl,
                    });
            });
            return router;
        }
    }
}

export = Route;