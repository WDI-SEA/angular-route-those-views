angular.module('App')

.controller('homeCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.test = "Home route works!"
$scope.photoArray;
console.log($scope.photoArray);
}])

.controller('tutorialCtrl', ['$scope', '$state', function($scope, $state) {
$scope.photoArray;
}])

.controller('historyCtrl', ['$scope', '$state', function($scope, $state) {
$scope.photoArray;
}])

.controller('photosCtrl', ['$scope', '$state', function($scope, $state) {

  $scope.photoURL;
  $scope.photoArray = [];

  $scope.addPhoto = function () {
    console.log($scope.photoURL)
    if ($scope.photoURL != undefined && $scope.photoURL != "") {
      $scope.photoArray.push($scope.photoURL);
    }
    console.log($scope.photoArray);
  }

}]);
