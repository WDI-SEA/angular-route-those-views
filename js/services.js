angular.module("WavvesServices", ["ngResource"])

.factory("Shows", [
  "$resource",
  function($resource) {
    return $resource(
        "http://api.bandsintown.com/artists/Wavves/events.json?api_version=2.0&app_id=wavves_fanz"
    );
  }
])