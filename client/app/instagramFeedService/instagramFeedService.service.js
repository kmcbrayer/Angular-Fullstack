'use strict';

angular.module('angularFullstackApp')
  .factory('instagramFeedService', function($resource) {
    return $resource('/api/instagram/feed');
  });
