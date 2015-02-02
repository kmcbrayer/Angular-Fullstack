'use strict';

angular.module('angularFullstackApp')
  .directive('touchSlideController', function($rootScope, $swipe, pageSetService) {
    return {
      restrict: 'A',
      link: function(scope,ele,attrs,ctrl) {
        function slideBack() {
          ele.animate({left: 0},400,'swing');
          time = 0;
        }
        var width = Math.max( $(window).width(), window.innerWidth);
        if (width <= 780 ) {
          var startx, delta;
          var enabled = true;
          var time = 0;
          $swipe.bind(ele, {
            'start': function(coords) {
              //reset for next swipe
              enabled = true;
              startx = coords.x;
              window.setInterval(function() {
                time+=100;
              }, 100);
            },
            'move': function(coords) {
              delta = coords.x - startx;
              if (enabled) {
                ele.css('left', delta);
                if (coords.x < 50 ) {
                  enabled = false;
                  //animate left
                  pageSetService.pageTurnRight();
                  //$('.first').animate({})
                  $rootScope.$broadcast('pageTurn');
                }
                if (coords.x > width-50) {
                  enabled = false;
                  //animate right
                  pageSetService.pageTurnLeft();
                  $rootScope.$broadcast('pageTurn');
                }
              }
            },
            'end': function(coords) {
              slideBack();
            },
            'cancel': function() {
              slideBack();
            }
          });
        }
      }
    };
  });
