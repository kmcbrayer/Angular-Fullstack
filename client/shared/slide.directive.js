'use strict';

angular.module('angularFullstackApp')
  .directive('touchSlideController', function($swipe, pageSetService) {
    return {
      restrict: 'A',
      link: function(scope,ele,attrs,ctrl) {
        var width = Math.max( $(window).width(), window.innerWidth);
        if (width <= 780 ) {
          var startx, delta;
          var enabled = true;
          $swipe.bind(ele, {
            'start': function(coords) {
              //reset for next swipe
              enabled = true;
              startx = coords.x;
            },
            'move': function(coords) {
              delta = coords.x - startx;
              if (enabled) {
                ele.css('left',delta);
                if (delta < -100) {
                  enabled = false;
                  //animate left
                  pageSetService.pageTurnRight();
                }
                if (delta > 100) {
                  enabled = false;
                  //animate right
                  pageSetService.pageTurnLeft();
                }
              }
            },
            'end': function(coords) {
              ele.animate({left: 0},400,'swing');
            },
            'cancel': function() {
              ele.animate({left: 0},400,'swing');
            }
          });
        }
      }
    };
  });
