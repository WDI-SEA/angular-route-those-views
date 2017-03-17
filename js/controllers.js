var app = angular.module('CloudCtrl', ['CloudFactory']);
app.controller("CloudCtrl", ["$scope", "CloudFactory", function($scope, CloudFactory){
  
  // $scope.movieId = 1;
  // $scope.clouds = [];
  // $scope.loading = false;

  // $scope.getAllMovies = function(){
  //   $scope.loading = true;
  //   CloudFactory.query(function success(data){
  //     console.log("success!");
  //     $scope.films = data.results; //Not sure what to put here
  //     $scope.loading = false;
  //   }, function error(data){
  //     console.log("error", data);
  //     $scope.loading = false;
  //   });
  // }

}]);

  // $scope.getOneMovie = function(id){
  //   $scope.loading = true;
  //   StarWarsFactory.get({ id: id }, function success(data){
  //     $scope.films = [data];
  //     $scope.loading = false;
  //   }, function error(data){
  //     console.log("error", data);
  //     $scope.loading = false;
  //   });
  // }