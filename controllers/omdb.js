app.controller('apiCtrl', ['$scope', 'MovieSearch' function($scope, MovieSearch) {
  $scope.films = [];
  $scope.searchTerm = '';
  Films.query(function success(data) {
    $scope.films = data;
  }, function error(data) {
    console.log(data);
  });
  console.log(MovieSearch);
}]);
