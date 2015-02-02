'use strict';

var TwitterStrategy = require('passport-twitter').Strategy;
var secrets = require('../config/secrets');
var config = require('../config/environment');
var log = require('../config/winston');
var passport = require('passport');

module.exports = function(app,store) {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  passport.use(new TwitterStrategy({
    consumerKey: secrets.twitter.consumerKey,
    consumerSecret: secrets.twitter.consumerSecret,
    callbackURL: "http://www."+config.siteName+"/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    process.nextTick(function () {
      store.setItem('twit_data', JSON.stringify(profile));
      log.info('user logged into twitter, and data set');
      return done(null, profile);
    });
  }
  ));
  // Twitter Routes
  app.get('/authin/twitter',
    passport.authenticate('twitter'));

  app.get('/auth/twitter/callback',
    passport.authenticate(
      'twitter',
      { failureRedirect: '/' }
    ),
    function(req, res) {
      log.info('auth success, redirect back to main page');
      res.redirect('/');
    }
  );
};
