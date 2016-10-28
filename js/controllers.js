var app = angular.module('GuyRitchieApp',['ui.router']);

app.controller("HomeCtrl", ['$scope', function($scope) {
  console.log("home controller loaded");

}]);

app.controller("AboutCtrl", ['$scope', function($scope) {
  console.log("about controller loaded");

}]);

app.controller("MoviesCtrl", ['$scope', function($scope) {
   console.log("movies controller loaded");

}]);

app.controller("AwardsCtrl", ['$scope', function($scope) {
   console.log("awards controller loaded");

}]);
