'use strict';

angular.module('bobross').factory('MovieFactory', function ($q, $http) {
  return {
    searchMovies(q) {
      return $http.get(`/movies/${q}`);
    }
  };
});