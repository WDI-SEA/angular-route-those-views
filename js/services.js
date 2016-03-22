angular.module("WavvesServices", ["ngResource"])

.factory("Films", [
  "$resource",
  function($resource) {
    return $resource(
        "http://swapi.co/api/films/:id",
        {},
        {
          query: {isArray: false}
        }
    );
  }
])