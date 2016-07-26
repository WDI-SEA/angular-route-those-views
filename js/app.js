var myApp = angular.module('myApp', ['ui.router']);
console.log('in the app');

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl'
  });

}]);


