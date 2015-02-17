'use strict';

var express = require('express');
var controller = require('./user.controller');

module.exports = function(passport,store) {
  var router = express.Router();

  router.get('/twitterInfo', controller.twitter(store));

  return router;
};
