angular.module("WavvesCtrls", ["WavvesServices"])

.controller("FilmShowCtrl", [
  "$scope",
  "$stateParams",
  "Films",
  function ($scope, $stateParams, Films) {
    $scope.film = {};
    Films.get(
      {id: $stateParams.id},
      function success(data) {
        $scope.film = data;
      }, function error (data) {
        console.log(data)
      }
    );
  }
])