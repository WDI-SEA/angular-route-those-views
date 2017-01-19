//Dependency injection for modules
angular.module('App', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  //Define routes below

  //Home route
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  })

  //Tutorial route
  .state('tutorial', {
    url: '/tutorial',
    templateUrl: 'views/tutorial.html',
    controller: 'tutorialCtrl'
  })

  .state('history', {
    url: '/history',
    templateUrl: 'views/history.html',
    controller: 'historyCtrl'
  })

  .state('photos', {
    url: '/photos',
    templateUrl: 'views/photos.html',
    controller: 'photosCtrl'
  });

}]);
