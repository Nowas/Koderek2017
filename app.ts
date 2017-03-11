import * as bodyParser from "body-parser";
import * as express from "express";
import * as http from "http";
import path = require('path');
import { HomeHandler } from "./routes/HomeHandler";
let configuration = require('../config.json');

//var passport 		= require('passport');
var expressSession 	= require('express-session');
var flash 			= require('connect-flash');

let port = process.env.PORT || 3001;
let app = express();

let srv = http.createServer(app).listen(port, function () {
    console.log('server listening on port ' + port);
});

app.use(expressSession({secret: 'mySecretKey123'}));
app.use(flash())

var i18n = require('i18n');

i18n.configure({
    locales:['en', 'pl'],
    directory: path.join(__dirname, '../locales')
});
 
app.use(i18n.init);
app.use(function (req, res, next) {
	// mustache helper
	res.locals.__ = function () {
	  return function (text, render) {
	    return i18n.__.apply(req, arguments);
	  };
	};
	if(next)
		next();
});

app.set('view engine', 'hjs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, '../public')));
app.use(new HomeHandler().httpHandlers());

module.exports = app;
