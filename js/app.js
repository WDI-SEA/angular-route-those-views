console.log("hey there");
var app = angular.module("WordConverterApp", ['WordConverterCtrl', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url:'/',
    templateUrl:'views/home.html',
    controller: 'WordConverterCtrl'
  })
  .state('show', {
    url:'/:search/:id',
    templateUrl: 'views/wordShow.html',
    controller: 'WordShowCtrl'
  })
  .state('about', {
    url:'/about',
    templateUrl: 'views/about.html',
  });


}]);
