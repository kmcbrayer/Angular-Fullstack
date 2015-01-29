'use strict';

angular.module('angularFullstackApp')
  .value('twitterUser',
    {
      id : 7,
      _json : {
        screen_name : "kmac",
        name : "Kevin McBrayer"
      },
      photos: [
        {value: 'insert URL'}
      ]
    }
  );
