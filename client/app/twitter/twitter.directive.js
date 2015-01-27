'use strict';

angular.module('angularFullstackApp')
  .directive('tweet', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/twitter/twitter.directive.html',
      scope: {
        tweet: "="
      }
    }
  })
