'use strict';

angular.module('angularFullstackApp')
  .directive('igram', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/instagram/instagram.directive.html',
      scope: {
        igram: "="
      }
    }
  })
