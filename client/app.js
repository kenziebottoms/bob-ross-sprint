'use strict';

angular.module('bobross', ['ngRoute'])
  .config($routeProvider => {
    $routeProvider
      .when('/test', {
        templateUrl: 'partials/test.html',
        controller: 'TestCtrl'
      });
  });