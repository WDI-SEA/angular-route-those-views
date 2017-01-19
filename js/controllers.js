angular.module('App')

.controller('globalCtrl', ['$scope', '$state', function($scope, $state) {
// This works, but ask about $rootscope, passing things without needing to make controller hierarchy
$scope.photoArray = [];
}])

.controller('homeCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.test = "Home route works!"
}])

.controller('tutorialCtrl', ['$scope', '$state', function($scope, $state) {
$scope.photoArray;
}])

.controller('historyCtrl', ['$scope', '$state', function($scope, $state) {
$scope.photoArray;
}])

.controller('photosCtrl', ['$scope', '$state', function($scope, $state) {

  $scope.photoURL;

  $scope.addPhoto = function () {
    console.log($scope.photoURL)
    if ($scope.photoURL != undefined && $scope.photoURL != "") {
      $scope.photoArray.push($scope.photoURL);
    }
    console.log($scope.photoArray);
  }

}]);
