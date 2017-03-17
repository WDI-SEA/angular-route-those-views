var app = angular.module('FilmCtrl', []);

app.controller('FilmCtrl', ['$scope', '$http', '$window', function($scope, $http, $window){
	// $scope.searchTerm = 'speed'
	$scope.search = function(){
		$window.location.href = '/#/film';
		var req = {
			url: 'http://www.omdbapi.com/?',
			method: 'GET',
			params: {
				s: $scope.searchTerm
			}
		}

		$http(req).then(function success(res){
			console.log(res);
			$scope.searchTerm = ''
		}, function(res){
			console.log('ERROR', res);
		})
		//pushing results from search into array
		$scope.movies = [];

		$http(req).then(function success(res){
			$scope.movies = res.data.Search;
			}, function error(res){
				console.log('ERROR', res);
			});
	}
}])

