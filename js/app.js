angular.module('App',['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html'
		})
		.state('cast', {
			url: '/cast',
			templateUrl: 'views/cast.html',
			controller: 'CastCtrl'
		})
		.state('trailer', {
			url: '/trailer',
			templateUrl: 'views/trailer.html'
		})
	}]);