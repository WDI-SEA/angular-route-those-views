ryanSite.controller('MainCtrl', ['$scope', function($scope) {
  // $scope.mainText = 'this is some main text';

  $scope.scroll = function() {
    $scope.paths = ['/', '/about', '/portfolio', 'experience', 'skills'];
    var index = $scope.paths.indexOf($location.path());

    if(index !== -1) {
      $location.path = $scope.paths[index + 1]
    } else {
      $location.path = $scope.paths[0];
    }
  }
}]);
