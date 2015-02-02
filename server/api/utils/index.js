'use strict';

var express = require('express');
var controller = require('./utils.controller');

module.exports = function(store) {
  var router = express.Router();

  router.get('/clear', controller.clear(store));

  return router;
}
