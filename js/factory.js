var app = angular.module("PokemonFactory", ["ngResource"]);
app.factory("PokemonFactory", ["$resource", function($resource){
	var url = 'http://pokeapi.co/api/v2/pokemon/';

	return $resource(url, {}, {
    	query: { isArray: false }
	});
}]);
