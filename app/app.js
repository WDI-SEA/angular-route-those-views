var app = angular.module("HipHopApp", ["ui.router"]);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	// Define your routes!
	$stateProvider
	.state('roots', {
		url: '/',
		templateUrl: 'views/roots.html',
		controller: 'RootsCtrl'
	})
	.state('oldschool', {
		url: '/oldschool',
		templateUrl: 'views/oldschool.html',
		controller: 'OldSchoolCtrl'
	})
	.state('modern', {
		url: '/modern',
		templateUrl: 'views/modern.html',
		controller: 'ModernCtrl'
	}); // End of $stateProvider

}]); // End of app.config