var app = angular.module('StarWarsApp', ['ngResource', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('mains', {
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

app.factory('FilmsFactory', ['$resource', function($resource) {
  return $resource('http://swapi.co/api/films/:id', {}, {
    query: { isArray: false }
  });
}]);
