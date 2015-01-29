'use strict';

angular.module('angularFullstackApp')
  .controller('MainCtrl', function ($scope, $http, $q, pageSetService,
                                    twitterFeedService, youtubeFeedService, instagramFeedService) {
    //set the pages
    $scope.mainPage = {
      dataList : [],
      page : pageSetService.list[0]
    };
    $scope.twitterPage = {
      dataList : [],
      page : pageSetService.list[1]
    };
    $scope.youtubePage = {
      dataList : [],
      page : pageSetService.list[2]
    };
    $scope.instagramPage = {
      dataList : [],
      page : pageSetService.list[3]
    };

    //set data
    twitterFeedService.query(function(data) {
      $scope.twitterPage.dataList = data;
      $scope.mainPage.dataList = addSorted($scope.mainPage.dataList,data);
    });

    youtubeFeedService.query(function(data) {
      $scope.youtubePage.dataList = data;
      $scope.mainPage.dataList = addSorted($scope.mainPage.dataList,data);
    });

    instagramFeedService.query(function(data) {
      $scope.instagramPage.dataList = data;
      $scope.mainPage.dataList = addSorted($scope.mainPage.dataList,data);
    });

    $scope.pageTurnRight = function(){
      pageSetService.pageTurnRight();
    };

    $scope.pageTurnLeft = function(){
      pageSetService.pageTurnLeft();
    };

    //TODO: better sorting algorythm
    function addSorted(mainList, dataList) {
      mainList = mainList.concat(dataList);
      return mainList.sort(function(a,b) {
        if(a.date > b.date)
          return -1;
        if(a.date < b.date)
          return 1;
        return 0
      });
    }
  });
