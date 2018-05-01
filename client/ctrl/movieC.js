'use strict';

angular.module('bobross').controller('MovieCtrl', function($scope, MovieFactory, $routeParams) {
  MovieFactory.searchMovies($routeParams.q)
    .then(({data}) => {
      $scope.movies = data;
      $scope.search = $routeParams.q;
    })
    .catch(err => console.log(err));
});