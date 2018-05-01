'use strict';

angular.module('bobross').controller('MovieCtrl', function($scope, MovieFactory) {
  $scope.search = () => {
    $scope.searchTerm = $scope.term;
    $scope.movies = null;
    MovieFactory.searchMovies($scope.term)
      .then(({data}) => {
        $scope.movies = data;
      })
      .catch(err => console.log(err));
  };
});