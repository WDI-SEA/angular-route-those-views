var app = angular.module('MyGifApp');

app.controller('gifSearchCtrl', ['$scope', '$state', 'giphyService', function($scope, $state, giphyService){
	console.log("gif search controller loaded!");
	$scope.results = [];

	$scope.getGifs = function(searchTerm){
		console.log(searchTerm);
		giphyService.getGifs(searchTerm).then(function(response){
			$scope.results = response.data.data;
			console.log($scope.results);
			// $state.go('gifs');
		});
	}

}]);

app.controller('detailsCtrl', ['$scope', function($scope){
	console.log("detailsCtrl loaded");
}]);