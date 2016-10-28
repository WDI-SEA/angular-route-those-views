app.factory('MovieSearch', ['$resource', function($resource) {
  return $resource('http://www.omdbapi.com/?', {
    s: @searchParam
  }, {
    query: {isArray: false}
  });
}]);
