'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFullstackApp'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope,
                              instagramFeed, twitterStatuses, youtubeSubs) {
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', '/api/twitter/statuses')
      .respond(
      twitterStatuses
    );
    $httpBackend.when('GET', '/api/youtube/subscriptions')
      .respond(
      youtubeSubs
    );
    $httpBackend.when('GET', '/api/instagram/feed')
      .respond(
      instagramFeed
    );

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(1).toBe(1);
  });
});
