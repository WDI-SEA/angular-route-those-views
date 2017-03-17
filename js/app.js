var app = angular.module('YugiApp', ['YugiCtrl','ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('cards', {
        url: '/',
        templateUrl: 'views/cards.html',
        controller: 'YugiCtrl'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
    })
    .state('API', {
        url: '/api',
        templateUrl: 'views/API.html'
    })

}])