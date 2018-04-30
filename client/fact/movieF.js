'use strict';

angular.module('bobross').factory('MovieFactory', function($q, $http) {
  return {
    searchMovies(q) {
      return $q((resolve, reject) => {
        $http.get(`/movies/${q}`)
          .then(movies => {
            resolve(movies);
          })
          .catch(err => reject(err));
      });
    }
  };
});