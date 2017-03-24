(function() {
  'use strict';
  var app = angular.module('yrapp');

  var MainCtrl = function($scope) {
    $scope.payments = [];
  };

  app.controller('MainCtrl', ['$scope', MainCtrl]);
}());
