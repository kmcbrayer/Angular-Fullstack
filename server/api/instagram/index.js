'use strict';

var express = require('express');
var controller = require('./instagram.controller');

module.exports = function(passport,store) {
  var router = express.Router();

  router.get('/feed', controller.feed(store));

  return router;
};
