"use strict";
import * as express from 'express';
import { Router } from "express";
import { ClassModel } from "../services/Models/ClassModel";
import { ClassService } from "../services/ClassService";
import { ClassFilter } from "../services/Models/ClassFilter";
var i18n = require('i18n');
var fs = require('fs');

module Route {
    export class HomeHandler {
        //public httpHandlers(passport:any) {
        public httpHandlers(): Router {
            let router = express.Router();

            router.get('/',
                function (req: any, res) {
                    res.render('index', {
                        baseUrl: req.baseUrl,
                        baseClassesUrl: req.baseUrl + '/classes'
                    });
                });

            router.get('/classes',
                function (req: any, res) {  
                    res.jsonp(new ClassService().GetClasses(new ClassFilter()));
                });

            return router;
        }
    }
}

export = Route;