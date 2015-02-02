'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  siteName: 'devsite.com:9000',
  mongo: {
    uri: 'mongodb://localhost/angularfullstack-dev'
  },

  seedDB: true
};
