var app = angular.module("CloudApp", ['CloudCtrl','ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  //Call The Views
  $stateProvider
  .state('clouds',{
    url: '/',
    templateUrl: 'views/clouds.html',
    controller: 'CloudCtrl'
  })
  .state('cloudTypes', {
    url:'/cloudTypes',
    templateUrl: 'views/cloudTypes.html'
  })
  .state('happyClouds', {
    url:'/happyClouds',
    templateUrl: 'views/happyClouds.html'
  })

 
}]);