var app = angular.module('YugiCtrl', ['YugiFactory']);

app.controller('YugiCtrl', ['$scope', 'YugiFactory', function($scope, YugiFactory){
    $scope.cards = [];
    $scope.getData = function(){
        YugiFactory.query(function success(data){
            $scope.cards = data.data;
            console.log($scope.cards);
        })
    }
}])