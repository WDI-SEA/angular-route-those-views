angular.module("Controllers", ["Services"])


.controller("TestCtrl", ["$scope", function($scope) {
  $scope.test = "test success";
}])

.controller("PlayersShowCtrl", ['$scope', '$stateParams', "Players", function($scope, $stateParams, Players) {
  $scope.player = Players.players[$stateParams.id - 1];
}])