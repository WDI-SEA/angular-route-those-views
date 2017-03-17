var app = angular.module("Dictionary", ["ui.router"]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'dictionaryCtrl'
    })
    .state('giphy', {
        url: '/giphy/:thing',
        templateUrl: 'views/giphy.html',
        controller: 'giphyCtrl'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
    })
}]);

app.controller("dictionaryCtrl", ['$scope', '$http', function($scope, $http){
    $scope.word = "why";
    $scope.loading = false;
    $scope.defined = [];

    $scope.define = function() {
        $scope.$watch("searchTerm", function(newVal, oldVal) {
            var req = {
                url: 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + $scope.word,
                method: "GET",
                headers: {
                    "X-Mashape-Key": 'SHIWxiTM5ymshuYYIAeKh03ZgGeep1qUqsQjsniKQz1sCivYS8',
                    'Accept': "text/plain"
                }
            }
            $http(req).then(function success(res) {
                $scope.defined = res.data.list;
                console.log($scope.defined)

            }, function error(res) {
                console.log("Error", res)
            })
        })
    }
}]);

app.controller("giphyCtrl", ['$scope', '$http', "$stateParams", function($scope, $http, $stateParams) {
    $scope.gif = []
    $scope.word = $stateParams.thing;
    $scope.$watch("searchTerm", function(newVal, oldVal) {
        var req = {
        url: "https://api.giphy.com/v1/gifs/search?",
        method: "GET",
        params: {
            q: $stateParams.thing,
            api_key: "dc6zaTOxFJmzC",
            limit: 50,
            offset: $scope.gif.length
        }
    }

    $http(req).then(function success(res) {
        $scope.gif = res.data.data
    }, function error(res) {
        console.log("There was an error", res)
    })
    })
}]);