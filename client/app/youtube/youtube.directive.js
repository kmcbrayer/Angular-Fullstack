'use strict';

angular.module('angularFullstackApp')
  .directive('ytube', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/youtube/youtube.directive.html',
      scope: {
        ytube: "="
      }
    }
  })
