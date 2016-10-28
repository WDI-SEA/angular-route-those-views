var app = angular.module("GuyRitchieApp");
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/views/about.html',
    controller: 'AboutCtrl'
  })
  .state('movies', {
    url: '/movies',
    templateUrl: '/views/movies.html',
    controller: 'MoviesCtrl'
  })
  .state('awards', {
    url: '/awards',
    templateUrl: '/views/awards.html',
    controller: 'AwardsCtrl'
  });

}]);
