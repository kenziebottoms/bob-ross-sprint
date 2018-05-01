'use strict';

angular.module('bobross', ['ngRoute'])
  .config($routeProvider => {
    $routeProvider
      .when('/movies', {
        templateUrl: 'partials/movies.html',
        controller: 'MovieCtrl'
      })
      .when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'LoginCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      });
  });