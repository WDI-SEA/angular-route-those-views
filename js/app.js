var app = angular.module('BreakingApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');


$stateProvider
.state('walter', {
	url: '/walter',
	templateUrl: '/views/walter.html',
	controller: 'WalterCtrl'
})
.state('Jesse', {
	url: '/jesse',
	templateUrl: '/views/jesse.html',
	controller: 'JesseCtrl'
})
.state('Gustavo', {
	url: '/gustavo',
	templateUrl: '/views/gustavo.html',
	controller: 'GustavoCtrl'
})

}]);