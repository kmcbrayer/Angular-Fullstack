/**
 * Main application file
 */

'use strict';

// Set default node environment to development
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
}

var express = require('express');
var config = require('./config/environment');
var Storage = require('dom-storage');
var passport = require('passport');

var store = new Storage(null, {strict:true});
// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app,passport,store);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
