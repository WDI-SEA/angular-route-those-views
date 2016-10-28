var app = angular.module("MyGifApp", ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  //define routes
  $stateProvider
  .state('search', {
    url: '/',
    templateUrl: 'views/search.html',
    controller: 'gifSearchCtrl'
  })
  .state('gifs', {
  	url: '/gifs',
  	templateUrl: 'views/showGifs.html',
  	controller: 'gifSearchCtrl'
  })
  .state('details', {
    url: '/gifs/:id',
    templateUrl: 'views/details.html',
    controller: 'detailsCtrl'
  })
  .state('vod', {
  	url: '/vod',
  	templateUrl: 'views/vod.html'
  });

}]);