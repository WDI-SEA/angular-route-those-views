var app = angular.module('StarWarsApp', ['ngResource', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/views/about.html',
    controller: 'AboutCtrl'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl'
  });
}])

app.factory('FilmsFactory', ['$resource', function($resource) {
  return $resource('http://swapi.co/api/films/:id', {}, {
    query: { isArray: false }
  });
}]);

app.controller('FilmsCtrl', ['$scope', 'FilmsFactory', function($scope, FilmsFactory) {
  $scope.movieId = '';
  $scope.films = [];
  $scope.loading = false;

  $scope.getAll = function() {
    $scope.loading = true;
    FilmsFactory.query(function success(data) {
      $scope.films = data.results;
      $scope.loading = false;
    });
  };

  $scope.getMovie = function(id) {
    $scope.loading = true;
    FilmsFactory.get({ id: id }, function success(data) {
      $scope.films = [data];
      $scope.loading = false;
    }, function error(data) {
      console.log('error');
      $scope.loading = false;
    });
  };

}])
