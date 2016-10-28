var app = angular.module("HalloweenApp", ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('halloween', {
		url: '/',
		templateUrl: 'views/halloween.html',
		controller: 'HomeCtrl'
	})
	.state('christmas', {
		url: '/christmas',
		templateUrl: 'views/christmas.html'
	})
	.state('stpat', {
		url: '/stpat',
		templateUrl: 'views/stpat.html'
	});
}]);