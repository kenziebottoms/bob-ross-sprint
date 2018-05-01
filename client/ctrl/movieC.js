'use strict';

angular.module('bobross').controller('MovieCtrl', function($scope, MovieFactory, $routeParams) {
  $scope.search = $routeParams.q;
  MovieFactory.searchMovies($routeParams.q)
    .then(({data}) => {
      $scope.movies = data;
    })
    .catch(err => console.log(err));
});