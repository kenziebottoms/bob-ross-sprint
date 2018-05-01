'use strict';

angular.module('bobross', ['ngRoute'])
  .config($routeProvider => {
    $routeProvider
      .when('/movies/:q', {
        templateUrl: 'partials/movies.html',
        controller: 'MovieCtrl'
      })
      .when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      });
  });