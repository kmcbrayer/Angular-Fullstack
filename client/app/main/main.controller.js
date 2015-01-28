'use strict';

angular.module('angularFullstackApp')
  .controller('MainCtrl', function ($scope, $http, $q, pageSetService,
                                    twitterFeedService, youtubeFeedService, instagramFeedService) {
    //set the pages
    $scope.dataList = [];
    $scope.pageSet = pageSetService.list;

    twitterFeedService.query(function(data) {
      $scope.dataList = addSorted($scope.dataList,data);
    });

    youtubeFeedService.query(function(data) {
      $scope.dataList = addSorted($scope.dataList,data);
    });

    instagramFeedService.query(function(data) {
      $scope.dataList = addSorted($scope.dataList,data);
    });

    $scope.pageTurnRight = pageSetService.pageTurnRight();

    $scope.pageTurnLeft = function() {
      for (var i in $scope.pageSet) {
        if ($scope.pageSet[i].position === 'first') {
          $scope.pageSet[i].position = 'second';
        } else if ($scope.pageSet[i].position === 'second') {
          $scope.pageSet[i].position = 'third';
        } else if ($scope.pageSet[i].position === 'third') {
          $scope.pageSet[i].position = 'fourth';
        } else {
          $scope.pageSet[i].position = 'first';
        }
      }
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
