var app = angular.module("CloudFactory", ["ngResource"]);
app.factory("CloudFactory", ["$resource", function($resource){
  var url = 'http://swapi.co/api/films/:id';

  return $resource(url, {}, {
    query: { isArray: false }
  });

}]);

	// var _apiKey = "AIzaSyDE4K6ElCg0KsRliR_1nddAWM-If70Pyx4";

	// youtubeFactory.getVideosFromSearchByParams({
	//     q: 'clouds', 
	//     maxResults: "10", 
	//     key: _apiKey
	// }).then(function (_data) {
	//     console.info("videos from search by q", _data);
	// }).catch(function (_data) {
	//     console.log("There was an error");
	// });





