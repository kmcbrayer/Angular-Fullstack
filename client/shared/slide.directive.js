'use strict';

angular.module('angularFullstackApp')
  .directive('touchSlideController', function($rootScope, $swipe, pageSetService) {
    return {
      restrict: 'A',
      link: function(scope,ele,attrs,ctrl) {
        function slideBack() {
          ele.animate({left: 0},400,'swing');
        }
        var width = Math.max( $(window).width(), window.innerWidth);
        if (width <= 762 ) {
          var startx, delta;
          var enabled = true;
          //lock the viewport for sliding on mobile devices
          $('.container').css('max-width', width);
          $('.container').css('width', width);
          $('.container').css('overflow', 'hidden');
          $swipe.bind(ele, {
            'start': function(coords) {
              //reset for next swipe
              enabled = true;
              startx = coords.x;
            },
            'move': function(coords) {
              delta = coords.x - startx;
              if (enabled) {
                ele.css('left', delta);
                if (coords.x < 50 || delta <= -150 ) {
                  enabled = false;
                  //animate left
                  pageSetService.pageTurnRight();
                  $rootScope.$broadcast('pageTurn');
                }
                if (coords.x > width-50 || delta >= 150) {
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
