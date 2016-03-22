angular.module("IJApp", ["IJCtrls", "ui.router"])

.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('main', {
			url: '/',
			templateUrl: 'views/main.html',
			controller: 'mainCtrl'
		})

//route for show page
		.state(
			"about",
			{
				url: "/about",
				templateUrl: "views/about.html"
			})
		.state(
			"eschaton",
			{
				url: "/eschaton",
				templateUrl: "views/eschaton.html"
			})
		.state(
			"Hal",
			{
				url: "/Hal",
				templateUrl: "views/hal.html"
			})
	}
])