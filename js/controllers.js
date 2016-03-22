angular.module("WavvesCtrls", ["WavvesServices"])

.controller("ShowsCtrl", [
  "$scope",
  "Shows",
  function ($scope, Shows) {
    $scope.shows = [];

    Shows.query(function success(res) {
        $scope.shows = res.data;
    }, function error(res) {
        console.log(res);
    });
  }
])