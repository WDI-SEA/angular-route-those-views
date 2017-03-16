var app = angular.module('PokemonCtrl', ['PokemonFactory']);

app.controller('PokemonCtrl', ['$scope', 'PokemonFactory', function($scope, PokemonFactory) {
	$scope.name = 'squirtle';
	$scope.pokemonData;
	$scope.loading = false;

	$scope.find = function() {
		console.log('clicked')
		$scope.loading = true;
		PokemonFactory.get( {name: $scope.name},			// test data
			function success(data) {
				console.log(data);
				$scope.pokemonData = data;
				$scope.loading = false
			},
			function error(data) {
				console.log('error', data);
				$scope.loading = false;
			}
		);
	}

}]);







