'use strict';

angular.module('angularFullstackApp')
  .controller('NavbarCtrl', function ($scope, $location, pageSetService, UserService) {
    $scope.pageSet = pageSetService.list;
    $scope.user = UserService.userData;

    $scope.$on('pageTurn', function() {
      $scope.$digest();
    });
    /*
    //set the page links if logged in
    //twitter
    if($scope.user.twitData.isLoggedIn) {
      //angular ng-repeat auto sorts so I have to use an array
      for (var i in $scope.pageSet) {
        if ($scope.pageSet[i].name === 'Twitter') {
          //$scope.pageSet[i].pageTarget = toggleTarget($scope.pageSet[i].pageTarget);
          $scope.pageSet[i].href = '/twitter';
        }
      }
    }
    //youtube
    if($scope.user.ytData.isLoggedIn) {
      for (var i in $scope.pageSet) {
        if ($scope.pageSet[i].name === 'Youtube') {
         //$scope.pageSet[i].pageTarget = toggleTarget($scope.pageSet[i].pageTarget);
          $scope.pageSet[i].href = '/youtube';
        }
      }
    }
    //instagram
    if($scope.user.igData.isLoggedIn) {
      for (var i in $scope.pageSet) {
        if ($scope.pageSet[i].name === 'Instagram') {
          //$scope.pageSet[i].pageTarget = toggleTarget($scope.pageSet[i].pageTarget);
          $scope.pageSet[i].href = '/instagram';
        }
      }
    }
    */

    var path = $location.path();
    if(path === '/') {
      setActive('Main', $scope.pageSet);
    } else if(path === '/twitter') {
      setActive('Twitter', $scope.pageSet);
    } else if(path === '/instagram') {
      setActive('Instagram', $scope.pageSet);
    } else if(path === '/youtube') {
      setActive('Youtube', $scope.pageSet);
    }

    function setActive(pageName, pageSet) {
      for (var i in pageSet) {
        if (pageSet[i].name === pageName) {
          pageSet[i].isActive = true;
        } else {
          pageSet[i].isActive = false;
        }
      }
    }
  });
