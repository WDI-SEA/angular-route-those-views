var app = angular.module('PokemonCtrl', ['PokemonFactory']);

app.controller('PokemonCtrl', ['$scope', 'PokemonFactory', 'FlavorTextFactory', function($scope, PokemonFactory, FlavorTextFactory) {
	$scope.name = 'charzard';
	$scope.pokemonData;
	$scope.speciesData;
	$scope.pokemonId;
	$scope.evolutionUrl;
	$scope.loading = false;

	$scope.find = function() {
		console.log('clicked')
		$scope.loading = true;
		PokemonFactory.get( {name: $scope.name},
			function success(data) {
				console.log(data);
				$scope.pokemonData = data;
				$scope.pokemonId = $scope.pokemonData.id;
				console.log($scope.pokemonId)
				
				FlavorTextFactory.get( {id: $scope.pokemonId},
					function success(data) {
						$scope.loading = false;
						$scope.speciesData = data;
						$scope.evolutionUrl = data.evolution_chain.url;
						console.log('this is working!')
					},
					function error(data) {
						console.log('error', data);
						$scope.loading = false;
					});
			},
			function error(data) {
				console.log('error', data);
				$scope.loading = false;
			}
		);
	}
}]);








