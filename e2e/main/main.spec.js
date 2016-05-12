'use strict';

describe('Main View', function() {
  var page, navBar;

  beforeEach(function() {
    browser.get('/');
    page = require('./main.po');
    navBar = require('../navBar/navBar.po');
  });

  it('should log into twitter and populate the main and twitter pages', function() {
    element.()
  });
});
