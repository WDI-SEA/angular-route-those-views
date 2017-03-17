var app = angular.module('FilmApp', ['FilmCtrl', 'ui.router']);
//                           Dependancies               Injections

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home',{
		url:'/',
		templateUrl: 'views/home.html'
	})
	.state('film',{
		url: '/film',
		templateUrl: 'views/films.html',
		controller: 'FilmCtrl'
	})
	.state('about', {
		url:'/about',
		templateUrl: 'views/about.html'
	})
	.state('more', {
		url: '/more/:id',
		templateUrl: 'views/more.html'
	})

}])




