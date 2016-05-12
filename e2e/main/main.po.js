/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.mainPage = element(by.model('mainPage'));
  this.twitterPage = element(by.model('twitterPage'));
  this.youtubePage = element(by.model('youtubePage'));
  this.instagramPage = element(by.model('instagramPage'));
};

module.exports = new MainPage();
