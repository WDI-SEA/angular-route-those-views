ryanSite.controller('ExperienceCtrl', ['$scope', function($scope) {
  // $scope.mainText = 'this is some main text';

  $scope.scroll = function() {
    var paths = ['/', '/about', '/portfolio', 'experience', 'skills'];
    var index = paths.indexOf($location.path);

    if(index !== -1) {
      $location.path = paths[index + 1]
    } else {
      $location.path = paths[0];
    }
  }
}]);
