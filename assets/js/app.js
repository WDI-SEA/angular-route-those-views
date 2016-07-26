var app = angular.module('Portfolio', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('what', {
    url: '/what',
    templateUrl: 'views/what.html',
    controller: 'WhatCtrl'
  })
  .state('work', {
    url: '/work',
    templateUrl: 'views/work.html',
    controller: 'WorkCtrl'
  })
  .state('storyCase', {
    url: '/storycase',
    templateUrl: 'views/storysyntax.html',
    controller: 'StoryCtrl'
  });
}]);
