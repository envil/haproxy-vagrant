(function() {
  'use strict';
  var app = angular.module('yrapp');
  var cardNumber = function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        var controller = ctrl;
        elm.bind('change paste keyup', function() {
          var value = elm.val();
          var newValue = '';
          var displayValue = '';
          for (var i = 0; i < value.length && i < 19; i++) {
            if (value.charCodeAt(i) > 47 && value.charCodeAt(i) < 58) {
              newValue += value[i];
            }
          }
          for (var i = 0; i < newValue.length; i++) {
            displayValue += newValue[i];
            if (i == 3 || i == 7 || i == 11) {
              displayValue += ' ';
            }
          }
          elm.val(displayValue);
          this.checkValidity();
        })
      }
    }
  };
  app.directive('cardNumber', cardNumber);
}());
