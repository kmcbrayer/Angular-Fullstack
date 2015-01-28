'use strict';

angular.module('angularFullstackApp')
  .factory('youtubeFeedService', function($resource) {
    return $resource('/api/youtube/subscriptions');
  });
