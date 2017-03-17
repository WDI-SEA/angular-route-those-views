var app = angular.module('WordConverterCtrl', []);

app.controller("WordConverterCtrl", ["$scope", "$http", "$state", "$stateParams", function($scope, $http, $state, $stateParams){
  $scope.searchTerm = '';
  $scope.searchData = '';
  $scope.loading = false;
  $scope.word;

  $scope.getDefinition = function(searchTerm){
    $scope.loading = true;

    var req = {
      url: 'https://mashape-community-urban-dictionary.p.mashape.com/define?',
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'JHQcBLIxaomshnz2UeYyz7Wqagbop1wVerkjsnAspWS0yHGyNx',
        'Accept': "text/plain"
      },
      params: {
        term: $scope.searchTerm
      }
    };

    $http(req).then(function success(res){
      console.log(res.data);
      $scope.searchData = res.data.list;
    }, function error(res){
      console.log("error", res);
    });

  };

}]);

app.controller("WordShowCtrl", ['$scope', '$state', '$stateParams', '$http', function($scope, $state, $stateParams, $http){
  $scope.word = {};
  var id = $stateParams.id;
  var searchTerm = $stateParams.search;

  var req = {
    url: 'https://mashape-community-urban-dictionary.p.mashape.com/define?',
    method: 'GET',
    headers: {
      'X-Mashape-Key': 'JHQcBLIxaomshnz2UeYyz7Wqagbop1wVerkjsnAspWS0yHGyNx',
      'Accept': "text/plain"
    },
    params: {
      term: searchTerm
    }
  };

  $http(req).then(function success(res){
    console.log(res.data);
    $scope.word = res.data.list[id];
  }, function error(res){
    console.log("error", res);
  });

}]);
