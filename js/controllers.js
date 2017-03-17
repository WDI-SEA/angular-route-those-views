var app = angular.module('pokemonCtrl',['pokemonFactory']);

app.controller("pokemonCtrl", ['$scope', 'pokemonFactory', function($scope, pokemonFactory){
  $scope.pokemonId = 1;
  $scope.pokemon=[];
  $scope.loading =false;

  $scope.getAllPokemon = function(){
    $scope.loading=false;
    pokemonFactory.query(function success(data){
      console.log('success');
      console.log(data);
      $scope.pokemon = data.results;
      $scope.loading = false;
    }, function error(data){
      console.log('error', data);
      $scope.loading= false;
    });
  }

  $scope.getOnePokemon = function(id){
    $scope.loading =true;
    pokemonFactory.get({ id:id }, function success(data){
      $scope.pokemon = {data};
      $scope.loading = false;
      console.log(data);
    }, function error(data){
      console.log('error', data);
      $scope.loading=false;
    });
  }
}]);

app.controller('PokeShowCtrl',['$scope', '$state', '$stateParams', 'pokemonFactory', function($scope, $state, $stateParams, pokemonFactory){
  $state.go('about');
  console.log($state.current);
}]);
