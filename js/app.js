// console.log("app.js hooked up");

angular.module('App', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home.html',
      controller: 'homeCtrl'
    })
    $stateProvider
    .state('plot', {
      url: '/plot',
      templateUrl: '/views/plot.html',
      controller: 'plotCtrl'
    })
    .state('cast', {
      url: '/cast',
      templateUrl: '/views/cast.html',
      controller: 'castCtrl'
    })
    .state('review', {
      url: '/review',
      templateUrl: '/views/review.html',
      controller: 'reviewCtrl'
    })
  }
]);
