var app = angular.module('BieberApp', ['ui.router', 'ngAnimate']);

app.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.gifs = [];

  var req = {
        url: "http://api.giphy.com/v1/gifs/search?q=justin-bieber&api_key=dc6zaTOxFJmzC",
      }

  $http(req).then(function success(res){
    $scope.gifs = res.data.data
    }, function error(req){
      console.log("There was an error");
    })


}]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home',{
    url: '/',
    templateUrl: 'views/home.html',
  })
  .state('music',{
    url: '/music',
    templateUrl: 'views/music.html'
  })
  .state('gifs',{
    url: '/gifs',
    templateUrl: 'views/gifs.html',
    controller: 'AppCtrl'
  })
  .state('about',{
    url: '/about',
    templateUrl: 'views/about.html'
  })
  //$locationProvider.html5Mode(false).hasPrefix('!');
}]);
