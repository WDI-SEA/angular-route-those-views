console.log('this works');

// var app = angular.module("RoutingApp", ['ui.router', 'ngAnimate']);

var app = angular.module("RoutingApp", ['ui.router']);



app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

   //define routes
  $stateProvider
  .state('home', {
	url: '/',
	templateUrl: 'views/home.html',
	controller: 'HomeCtrl'
  })
  .state('capybaras', {
	url: '/capybaras',
	templateUrl: 'views/capybaras.html',
	controller: 'CapybaraCtrl'
  })
  .state('raccoons', {
	url: '/raccoons',
	templateUrl: 'views/raccoons.html',
	controller: 'RaccoonCtrl'
  })
  .state('anteaters', {
	url: '/anteaters',
	templateUrl: 'views/anteaters.html',
	controller: 'AnteaterCtrl'
  })

}]);

