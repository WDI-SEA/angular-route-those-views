var app = angular.module('pokemonApp', ['pokemonCtrl', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('pokemon',{
    url:'/',
    templateUrl: 'views/pokemon.html',
    controller: 'pokemonCtrl'
  })
  .state('about',{
    url:'/about',
    templateUrl:'views/about.html'
  })
  .state('showPokemon',{
    url:'/pokemon/:id',
    templateUrl: 'views/pokemonShow.html',
    controller: 'PokeShowCtrl'
  })
}]);
