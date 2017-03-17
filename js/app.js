var app = angular.module("GreysAnatomyApp", ['ui.router']); //Add in ['GreysAnatomyCtrl', 'ui.router']); ONCE ADD ANIMATION CONTROLLER REMOVE HTML NOTE FOR CTRL

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('GreysAnatomy', {
		url: '/',
		templateUrl: 'views/GreysAnatomy.html',
	})
	.state('ErrbodyDead', {
		url: '/ErrbodyDead',
		templateUrl: 'views/ErrbodyDead.html'
	})
	.state('ShondaRhimes', {
		url: '/ShondaRhimes',
		templateUrl: 'views/ShondaRhimes.html'
		// controller: 'AppController'

	});
}]);
