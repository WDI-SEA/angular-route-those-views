console.log('this works');

var app = angular.module("RoutingApp", ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
 	$urlRouterProvider.otherwise('/');

   //define routes
  $stateProvider
  .state('goats', {
    url: '/goats',
    templateUrl: 'views/goats.html',
    controller: 'GoatCtrl'
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

