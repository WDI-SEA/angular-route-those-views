// console.log("controllers.js hooked up");

angular.module('App')
.controller('homeCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.name = 'Game of Thrones';

  $scope.changePlot = function() {
    $state.go('plot');
  }
  $scope.changeCast = function() {
    $state.go('cast');
  }
  $scope.changeReview = function() {
    $state.go('review');
  }
}])
.controller('castCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.name = 'Cast';
  $scope.message = 'Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington';

  $scope.changeState = function() {
    $state.go('home');
  }
}])
.controller('plotCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.name = 'Plot';
  $scope.message = 'Nine noble families fight for control over the mythical lands of Westeros. Meanwhile, a forgotten race hell-bent on destruction returns after being dormant for thousands of years.';

  $scope.changeState = function() {
    $state.go('home');
  }
  $scope.changeCast = function() {
    $state.go('cast');
  }
}])
.controller('reviewCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.name = 'Review';
  $scope.message = 'imdbRating: 9.5';
 
  $scope.changeState = function() {
    $state.go('home');
  }
}]);
