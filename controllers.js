angular.module('App')
  .controller('HomeCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
    $scope.name = 'home';

    $scope.changeState = function() {
      $state.go('', {
        message: 'hello'
      });
    };
  }])


.controller('ContactCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
  $scope.name = 'contact';

}])


.controller('InspirationCtrl', ['$scope', '$state', '$stateParams', '$http', function($scope, $state, $stateParams, $http) {
  $scope.name = 'inspiration';
  $scope.searchTerm = '1';
  $scope.results = undefined;
  $scope.arrayQuoteResults = [];
  $scope.$watch('searchTerm', function(newVal, oldVal) {
    $scope.search();
  });

  $scope.search = function() {
    var req = {
      url: 'http://api.icndb.com/jokes/random',

      method: 'GET',
      params: {
        value: $scope.searchTerm,
      }
    };
    $http(req).then(function success(res) {
      console.log("http success res", res);
      if (res.status === 200) {
        $scope.results = res.data.value;
        $scope.arrayQuoteResults.push($scope.results.joke);
        console.log($scope.arrayQuoteResults);
        console.log($scope.results.joke);
      } else {
        $scope.results = [];
      }
    }, function error(res) {
      $scope.results = [];
      console.log("Http error res", res);
    });
  };


}]);



// .controller('', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
//
//
// }])
// .controller('', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
//
//
// }]);
