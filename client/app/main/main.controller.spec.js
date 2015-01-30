'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFullstackApp'));

  var MainCtrl,
      scope;
  var list = [];
  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope,
                              instagramFeed, twitterStatuses, youtubeSubs) {

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
    scope.twitterPage.dataList = twitterStatuses;
    scope.youtubePage.dataList = youtubeSubs;
    scope.instagramPage.dataList = instagramFeed;
  }));

  it('should concat all the feeds', function () {
    expect(scope.mainPage.dataList.length).toBe(0);
    //add and sort the list
    scope.mainPage.dataList = scope.addSorted(scope.mainPage.dataList ,scope.twitterPage.dataList);
    scope.mainPage.dataList = scope.addSorted(scope.mainPage.dataList ,scope.youtubePage.dataList);
    scope.mainPage.dataList = scope.addSorted(scope.mainPage.dataList ,scope.instagramPage.dataList);
    expect(scope.mainPage.dataList.length).toBe(6);

    //make sure they are sorted right
    expect(scope.mainPage.dataList[0].type).toBe('twitter');
    expect(scope.mainPage.dataList[2].type).toBe('instagram');
    expect(scope.mainPage.dataList[3].type).toBe('youtube');
  });
});
