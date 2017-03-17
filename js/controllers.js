var app = angular.module("HorribleCtrl", []);
app.controller("HorribleCtrl", ['$scope', "$http", function($scope, $http){
  $scope.loading = false;
  $scope.preClick = true;

  $scope.getIt = function(){
    $scope.loading = true;
    $scope.preClick =false;
    var req ={
      url: "http://www.omdbapi.com/?",
      method: "GET",
      params: {
        s: "Dr Horrible's Sing-Along Blog"
      }
    }
    $http(req).then(function success(res){
      $scope.movies = res.data.Search;
      $scope.loading = false;
    }, function error(res){
      $scope.loading = false;
      console.log("Oh bananas.", res);
    });
  }

}])
