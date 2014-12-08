'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var session = require('express-session');

// Determin config
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Set up Express App
var app = express();
var config = require('./api/config');

// Live reload snippet in development
if(env === 'development') {
  console.log('App running in development environment');
  var livereload = require('connect-livereload');
  app.use(livereload({port: 35729}));
}

app.use(express.static(__dirname + '/dist'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

// CORS Support
app.use(function(req, res, next) {
  if(req.headers.origin) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
  }
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Access-Token, X-Requested-With, Cookie, Set-Cookie, Accept, Access-Control-Allow-Credentials, Origin, Content-Type, Request-Id, X-Api-Version, X-Request-Id');
  res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
  res.header('Allow', req.headers['access-control-request-method']);
  return next();
});

// HTML5 Pushstate support
app.get('*', function(req, res) {
  res.sendFile('./dist/index.html', { root: __dirname });
});

if(!module.parent) {
  app = app.listen(config.port);
  console.log('App listening on port ' + config.port);
}
