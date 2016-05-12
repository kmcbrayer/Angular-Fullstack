/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app,passport,store) {
  //twitter
  app.use('/api/twitter', require('./api/twitter')(passport,store));
  //youtube
  app.use('/api/youtube', require('./api/youtube')(passport,store));
  //instagram
  app.use('/api/instagram', require('./api/instagram')(passport,store));
  //utiliy functions
  app.use('/api/utils', require('./api/utils')(store));
  //user utilities
  //app.use('/api/user', require('./api/user'));

  //passport auth
  require('./auth/twit_login')(app,store);
  require('./auth/ig_login')(app,store);
  require('./auth/yt_login')(app,store);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
