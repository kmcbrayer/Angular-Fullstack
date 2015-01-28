'use strict';

angular.module('angularFullstackApp')
  .factory('twitterFeedService', function($resource) {
    return $resource('/api/twitter/statuses');
  });
