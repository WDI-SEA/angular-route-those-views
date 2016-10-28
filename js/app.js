var app = angular.module("KimsApp", ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	//define routes
	$stateProvider
	.state('main', {
		url: '/',
		templateUrl: 'views/main.html',
		controller: 'AppCtrl1'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'views/about.html',
		controller: 'AppCtrl2'
	})
	.state('classics', {
		url: '/classics',
		templateUrl: 'views/classics.html',
		controller: 'AppCtrl3'
	})
	.state('gems', {
		url: '/gems',
		templateUrl: 'views/gems.html',
		controller: 'AppCtrl4'
	})
	.state('beaches', {
		url: '/beaches',
		templateUrl: 'views/beaches.html',
		controller: 'AppCtrl5'
	})


}]);

