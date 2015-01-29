'use strict';

describe('Service: UserService', function () {

  // load the controller's module
  beforeEach(module('angularFullstackApp'));

  var service,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $rootScope, UserService,
                              twitterUser, instagramUser, youtubeUser) {
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', '/api/twitter/currentUser')
      .respond(
      twitterUser
    );
    $httpBackend.when('GET', '/api/youtube/currentUser')
      .respond(
      youtubeUser
    );
    $httpBackend.when('GET', '/api/instagram/currentUser')
      .respond(
      instagramUser
    );

    scope = $rootScope.$new();
    service = UserService;

  }));

  it('should get user data from backend', function () {
    $httpBackend.flush();
    service.updateTwitterInfo();
    service.updateYoutubeInfo();
    service.updateInstagramInfo();

    expect(service.userData.twitData.isLoggedIn).toBe(true);
    expect(service.userData.igData.isLoggedIn).toBe(true);
    expect(service.userData.ytData.isLoggedIn).toBe(true);

    expect(service.userData.twitData.displayName).toBe('Kevin McBrayer');
    expect(service.userData.igData.displayName).toBe('Kevin McBrayer');
    expect(service.userData.ytData.displayName).toBe('Kevin McBrayer');
  });
});
