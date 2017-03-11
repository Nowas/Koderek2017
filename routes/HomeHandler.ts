"use strict";
import * as express from 'express';
import { Router } from "express";
import { ClassModel } from "../services/Models/ClassModel";
import { ClassService } from "../services/ClassService";
import { ClassFilter } from "../services/Models/ClassFilter";
import { ClassScoreEnum } from "../services/Models/IClassScoreModel";
import { KoderekDB } from "../services/ClassDB";
var i18n = require('i18n');
var fs = require('fs');

module Route {
    export class HomeHandler {
        //public httpHandlers(passport:any) {
        public httpHandlers(): Router {
            let db:KoderekDB = new KoderekDB();
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
                    switch (req.body.radio) {
                        case 'radioAbove':
                            score = ClassScoreEnum.AboveExpectation;
                            break;
                        case 'radioBelow':
                            score = ClassScoreEnum.BelowExpectation;
                            break;
                        default:
                            score = ClassScoreEnum.AsExpected;
                            break;
                    }
                    res.redirect('/?status=' +new ClassService(db).SetScore(req.body.classID, score));
                });

            router.post('/classes',
                function (req: any, res) {
                    res.redirect('/?status=' +new ClassService(db).AddClass(
                        req.body.classID,
                        req.body.className,
                        new Date(req.body.classStartDate),
                        new Date(req.body.classEndDate),
                        req.body.classTeacher
                        ));
                });

            router.get('/classes',
                function (req: any, res) {
                    if(req.query.classname)
                        res.jsonp(new ClassService(db).GetClasses(new ClassFilter(req.query.classname)));
                    else
                        res.jsonp(new ClassService(db).GetClasses(new ClassFilter()));
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