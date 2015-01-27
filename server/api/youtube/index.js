'use strict';

var express = require('express');
var controller = require('./youtube.controller');

module.exports = function(passport, store) {
  var router = express.Router();

  router.get('/subscriptions', controller.subscriptions(store));

  return router;
}
