var app = angular.module('MyGifApp');

app.service('giphyService', ['$http', function($http){

this.getGifs = function(searchTerm){
	return $http({
		url: "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC",
		method: "GET",
		params: {}

	});
};

}]);