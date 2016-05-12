'use strict';

describe('Service: Instagram Feed', function() {
  beforeEach(module('angularFullstackApp'));

  var factory,
      result,
      $httpBackend;

  beforeEach(inject(function (_$httpBackend_, $injector, instagramFeed) {
    $httpBackend = _$httpBackend_;
    //get instagram feeds
    $httpBackend.when('GET', '/api/instagram/feed')
      .respond(
      instagramFeed
    );
    factory = $injector.get('instagramFeedService');
    factory.query(function(data) {
      result = data;
    });
  }));

  it('should return 2 instagram feeds', function() {
    $httpBackend.flush();
    expect(result[0].type).toBe('instagram');
    expect(result.length).toBe(2);
  });
});

