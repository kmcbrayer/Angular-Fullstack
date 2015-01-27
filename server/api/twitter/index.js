'use strict';

var express = require('express');
var controller = require('./twitter.controller');

module.exports = function(passport,store) {
  var router = express.Router();

  router.get('/statuses', controller.statuses(store));

  return router;
};