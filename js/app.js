var app = angular.module('App', ['ui.router'])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('project1', {
    url: '/project1',
    templateUrl: 'views/project1.html',
    controller: 'Prj1Ctrl'
  })
  .state('project2', {
    url: '/project2',
    templateUrl: 'views/project2.html',
    controller: 'Prj2Ctrl'
  })
  .state('project3', {
    url: '/project3',
    templateUrl: 'views/project3.html',
    controller: 'Prj3Ctrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
}])
