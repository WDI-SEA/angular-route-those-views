angular.module('IJSvcs', ['ngResource'])

.factory('Main', [
	'$resource',
	function($resource) {
		return $resource(
			// "http://infinitejest.wallacewiki.com/david-foster-wallace/index.php?search",
			"http://infinitejest.wallacewiki.com/david-foster-wallace/api.php?action=query&format=json",
			{},
			{
				query: {isArray:false}
			}
		);
	}
])