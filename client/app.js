'use strict';

angular.module('bobross', ['ngRoute'])
  .config($routeProvider => {
    $routeProvider
      .when('/movies/:q', {
        templateUrl: 'partials/movies.html',
        controller: 'MovieCtrl'
      });
  });