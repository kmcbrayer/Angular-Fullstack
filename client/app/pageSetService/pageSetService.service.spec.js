'use strict';

describe('Service: pageSetService', function() {
  beforeEach(module('angularFullstackApp'));

  var service;

  beforeEach(inject(function (pageSet, $injector) {
    service = $injector.get('pageSetService');
  }));

  it('should set the page list', function() {
    expect(service.list[0].name).toBe('Main');
  });

  it('should change the page positions after page turn right', function() {
    expect(service.list[0].position).toBe('first');
    service.pageTurnRight();
    expect(service.list[0].position).toBe('fourth');
  });

  it('should change the page positions after page turn right', function() {
    //it keeps the state from the first test
    expect(service.list[0].position).toBe('fourth');
    service.pageTurnLeft();
    expect(service.list[0].position).toBe('first');
  });
});
