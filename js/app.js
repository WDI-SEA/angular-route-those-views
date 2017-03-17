var app = angular.module('PokemonApp', ['PokemonCtrl', 'ui.router']);

console.log('app.js running')

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/home.html',
		controller: 'PokemonCtrl'
	})
	.state('pokemon', {
		url: '/pokemon',
		templateUrl: 'pokemon.html',
		controller: 'POkemonCtrl'
	});

}]);





