var app = angular.module('pokemonFactory', ['ngResource']);
app.factory('pokemonFactory', ['$resource', function($resource){
  var url = 'http://pokeapi.co/api/v2/pokemon/:id';

  return $resource(url, {}, {
    query: {
      isArray:false,
      //limit=150
    }
  });
}]);
