'use strict';

angular.module('angularFullstackApp')
  .value('youtubeSubs',
  [
    {
      "type" : "youtube",
      "videoId" : 777,
      "date" : "Tue Jan 12 2015",
      "title" : "a title",
      "thumb" : "url to thumb",
      "channelTitle" : "A channel title"
    },
    {
      "type" : "youtube",
      "videoId" : 722,
      "date" : "Tue Jan 14 2015",
      "title" : "a title",
      "thumb" : "url to thumb",
      "channelTitle" : "A channel title"
    },
  ]
);
