'use strict';

describe('Service: Youtube Feed', function() {
  beforeEach(module('angularFullstackApp'));

  var factory,
    result,
    $httpBackend;

  beforeEach(inject(function (_$httpBackend_, $injector, youtubeSubs) {
    $httpBackend = _$httpBackend_;
    //get twitter feeds
    $httpBackend.when('GET', '/api/youtube/subscriptions')
      .respond(
      youtubeSubs
    );
    factory = $injector.get('youtubeFeedService');
    factory.query(function(data) {
      result = data;
    });
  }));

  it('should return 2 Youtube feeds', function() {
    $httpBackend.flush();
    expect(result[0].type).toBe('youtube');
    expect(result.length).toBe(2);
  });
});
