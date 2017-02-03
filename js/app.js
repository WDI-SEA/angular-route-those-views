angular.module('App', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../views/home.html',
      controller: 'HomeController'
    })
    .state('news', {
      url: '/news',
      templateUrl: '../views/news.html',
      controller: 'NewsController'
    })
    .state('about', {
      url: '/about',
      templateUrl: '../views/about.html',
      controller: 'AboutController'
    })
    .state('sponsors', {
      url: '/sponsors/:id',
      templateUrl: '../views/sponsors.html',
      controller: 'SponsorsController'
    });

  }
]);
