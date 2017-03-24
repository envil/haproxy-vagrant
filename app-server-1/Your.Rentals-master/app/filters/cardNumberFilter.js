(function() {
  'use strict';
  var app = angular.module('yrapp', []);

  var cardNumberFilter = function() {
    return function(cardNumber) {
      if (typeof(cardNumber) == 'undefined' || cardNumber == null) {
        return '';
      }
      var solidNumber = '';
      for (var i = 0; i < cardNumber.length && i < 19; i++) {
        if (cardNumber.charCodeAt(i) > 47 && cardNumber.charCodeAt(i) < 58) {
          solidNumber += cardNumber[i];
        }
      }
      if (solidNumber.length < 16) {
        return 'error: invalid card number';
      }
      return 'XXXX XXXX XXXX ' + solidNumber.substr(12, 15);
    }
  }

  app.filter('cardNumberFilter', cardNumberFilter);
}());
