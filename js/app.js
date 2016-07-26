var StarWarsApp = angular.module('StarWarsApp', ['ngResource', 'ui.router'])

StarWarsApp.factory('Films', ['$resource', function($resource) {
  return $resource('http://swapi.co/api/films/:id', {}, {
    query: { isArray: false}
  });
}]);

StarWarsApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MoviesCtrl'
  })
  .state('movies', {
    url: '/movies',
    templateUrl: 'views/movies.html',
    controller: 'MoviesCtrl'
  })
  .state('newhope', {
    url: '/newhope',
    templateUrl: 'views/newhope.html',
    controller: 'NewHopeCtrl'
  })
  .state('empire', {
    url: '/empire',
    templateUrl: 'views/empire.html',
    controller: 'EmpireCtrl'
  })
  .state('jedi', {
    url: '/jedi',
    templateUrl: 'views/jedi.html',
    controller: 'JediCtrl'
  })
  .state('phantom', {
    url: '/phantom',
    templateUrl: 'views/phantom.html',
    controller: 'PhantomCtrl'
  })
  .state('clones', {
    url: '/clones',
    templateUrl: 'views/clones.html',
    controller: 'ClonesCtrl'
  })
  .state('sith', {
    url: '/sith',
    templateUrl: 'views/sith.html',
    controller: 'SithCtrl'
  })
  .state('awakens', {
    url: '/awakens',
    templateUrl: 'views/awakens.html',
    controller: 'AwakensCtrl'
  });
}]);

StarWarsApp.controller('MoviesCtrl', ['$scope', 'Films', function($scope, Films) {
  $scope.films = [];
  Films.query(function success(data) {
    $scope.films = data.results;
    console.log(data.results);
  }, function error(data) {
    console.log(data.results);
  });
}]);

StarWarsApp.controller('NewHopeCtrl', ['$scope', 'Films', function($scope, Films) {
  $scope.hope = [];
  Films.query(function success(data) {
    $scope.hope = data.results[0];
    console.log(data.results[0]);
  }, function error(data) {
    console.log(data.results[0]);
  });
}]);

StarWarsApp.controller('EmpireCtrl', ['$scope', 'Films', function($scope, Films) {
  $scope.empire = [];
  Films.query(function success(data) {
    $scope.empire = data.results[1];
    console.log(data.results[1]);
  }, function error(data) {
    console.log(data.results[1]);
  });
}]);

StarWarsApp.controller('JediCtrl', ['$scope', 'Films', function($scope, Films) {
  $scope.jedi = [];
  Films.query(function success(data) {
    $scope.jedi = data.results[2];
    console.log(data.results[0]);
  }, function error(data) {
    console.log(data.results[0]);
  });
}]);

StarWarsApp.controller('PhantomCtrl', ['$scope', 'Films', function($scope, Films) {
  $scope.phantom = [];
  Films.query(function success(data) {
    $scope.phantom = data.results[3];
    console.log(data.results[0]);
  }, function error(data) {
    console.log(data.results[0]);
  });
}]);

StarWarsApp.controller('ClonesCtrl', ['$scope', 'Films', function($scope, Films) {
  $scope.clones = [];
  Films.query(function success(data) {
    $scope.clones = data.results[4];
    console.log(data.results[0]);
  }, function error(data) {
    console.log(data.results[0]);
  });
}]);

StarWarsApp.controller('SithCtrl', ['$scope', 'Films', function($scope, Films) {
  $scope.sith = [];
  Films.query(function success(data) {
    $scope.sith = data.results[5];
    console.log(data.results[0]);
  }, function error(data) {
    console.log(data.results[0]);
  });
}]);

StarWarsApp.controller('AwakensCtrl', ['$scope', 'Films', function($scope, Films) {
  $scope.awakens = [];
  Films.query(function success(data) {
    $scope.awakens = data.results[6];
    console.log(data.results[0]);
  }, function error(data) {
    console.log(data.results[0]);
  });
}]);
