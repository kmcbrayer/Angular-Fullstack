'use strict';

angular.module('angularFullstackApp')
  .service('pageSetService', function() {
    var self = this;

    self.list = [
      {
        name: "Main",
        isActive: true,
        position: "first",
        href: "#",
        pageTarget : ''
      },
      {
        name: "Twitter",
        isActive: false,
        position: "second",
        href: "/authin/twitter",
        pageTarget : '_self'
      },
      {
        name: "Youtube",
        isActive: false,
        position: "third",
        href: "/authin/youtube",
        pageTarget : '_self'
      },
      {
        name: "Instagram",
        isActive: false,
        position: "fourth",
        href: "/authin/instagram",
        pageTarget : '_self'
      }
    ];
    //page turn right
    self.pageTurnRight = function() {
      for (var i in self.list) {
        if (self.list[i].position === 'first') {
          self.list[i].position = 'fourth';
          self.isActive = false;
        } else if (self.list[i].position === 'second') {
          self.list[i].position = 'first';
          self.isActive = true;
        } else if (self.list[i].position === 'third') {
          self.list[i].position = 'second';
          self.isActive = false;
        } else {
          self.list[i].position = 'third';
          self.isActive = false;
        }
      }
    }
  });
