'use strict';

var log = require('./config/winston');

exports.buildError = function(err) {
  log.debug(err)
  var er = new Error();
  er.status = 304;
  return er;
}
