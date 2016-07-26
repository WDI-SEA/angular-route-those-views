//Declare Angular App
var app = angular.module('StarWarsApp', ['ngResource', 'ui.router']);

//Declares routes and states
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/views/about.html',
    controller: 'AboutCtrl'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl'
  })
  .state('films', {
    url: '/films',
    templateUrl: 'views/films.html',
    controller: 'FilmsCtrl'
  });
}]);

//API call goes in factory, using $resource
app.factory('FilmsFactory', ['$resource', function($resource) {
  return $resource('http://swapi.co/api/films/:id', {}, {
    query: { isArray: false }
  });
}]);
