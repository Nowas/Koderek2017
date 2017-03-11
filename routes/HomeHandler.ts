"use strict";
import * as express from 'express';
import { Router } from "express";
import { ClassModel } from "../services/Models/ClassModel";
import { ClassService } from "../services/ClassService";
import { ClassFilter } from "../services/Models/ClassFilter";
import { ClassScoreEnum } from "../services/Models/IClassScoreModel";
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
                        baseClassesUrl: req.baseUrl + '/classes',
                        baseScoreUrl: req.baseUrl + '/score'
                    });
                });

            router.post('/score',
                function (req: any, res) {
                    var score: ClassScoreEnum;

                    if (req.body.radioAs)
                        score = ClassScoreEnum.AsExpected;
                    else if (req.body.radioBelowe)
                        score = ClassScoreEnum.BelowExpectation;
                    else
                        score = ClassScoreEnum.AboveExpectation;

                    res.jsonp(new ClassService().SetScore(req.body.classID, score));
                });

            router.get('/classes',
                function (req: any, res) {
                    res.jsonp(new ClassService().GetClasses(new ClassFilter()));
                });

            router.get('/statistics',
                function (req: any, res) {  
                    var stat = new ClassService().GetScoreForClass(req.query.id);
                    res.jsonp([
                        {"category":"BeloveExpected","count":stat[0]},
                        {"category":"AsExpected","count":stat[1]},
                        {"category":"AboveExpected","count":stat[2]},
                    ]);
                });

            return router;
        }
    }
}

export = Route;