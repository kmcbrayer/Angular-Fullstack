'use strict';

angular.module('angularFullstackApp')
  .service('pageSetService', function($rootScope, pageSet, UserService) {
    var self = this;

    self.list = pageSet;

    //page turn right
    self.pageTurnRight = function() {
      for (var i in self.list) {
        if (self.list[i].position === 'first') {
          self.list[i].position = 'fourth';
          self.list[i].isActive = false;
        } else if (self.list[i].position === 'second') {
          self.list[i].position = 'first';
          self.list[i].isActive = true;
        } else if (self.list[i].position === 'third') {
          self.list[i].position = 'second';
          self.list[i].isActive = false;
        } else {
          self.list[i].position = 'third';
          self.list[i].isActive = false;
        }
      }
    }

    self.pageTurnLeft = function() {
      for (var i in self.list) {
        if (self.list[i].position === 'first') {
          self.list[i].position = 'second';
          self.list[i].isActive = false;
        } else if (self.list[i].position === 'second') {
          self.list[i].position = 'third';
          self.list[i].isActive = false;
        } else if (self.list[i].position === 'third') {
          self.list[i].position = 'fourth';
          self.list[i].isActive = false;
        } else {
          self.list[i].position = 'first';
          self.list[i].isActive = true;
        }
      }
    }

  });
