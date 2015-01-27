'use strict';

angular.module('angularFullstackApp')
  .filter('youtubeDescription', function() {
    return function(text) {
      if (text)
        return text.substring(0,140)+"...";
    }
  });
