ryanSite.controller('AboutCtrl', ['$scope', function($scope) {
  $scope.aboutText = 'This is text from the about controller';


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
