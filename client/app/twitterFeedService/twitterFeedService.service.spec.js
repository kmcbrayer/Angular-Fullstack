'use strict';

describe('Service: Twitter Feed', function() {
  beforeEach(module('angularFullstackApp'));

  var factory,
    result,
    $httpBackend;

  beforeEach(inject(function (_$httpBackend_, $injector, twitterStatuses) {
    $httpBackend = _$httpBackend_;
    //get twitter feeds
    $httpBackend.when('GET', '/api/twitter/statuses')
      .respond(
      twitterStatuses
    );
    factory = $injector.get('twitterFeedService');
    factory.query(function(data) {
      result = data;
    });
  }));

  it('should return 2 Twitter feeds', function() {
    $httpBackend.flush();
    expect(result[0].type).toBe('twitter');
    expect(result.length).toBe(2);
  });
});
