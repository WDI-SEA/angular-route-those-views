var app = angular.module('myApp', ['ui.router', 'ngResource']);


// config file is usually in the app file like this
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html'
      // contoller: ''
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html'
      // contoller: ''
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html'
      // contoller: ''
    })
    .state('apipractice', {
      url: '/api',
      templateUrl: 'views/api.html',
      contoller: 'apiCtrl'
    });

}]);
