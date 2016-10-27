var app = angular.module('RoutingApp');


app.controller("GoatCtrl", ['$scope', function($scope) {
	$scope.goatstuff = "GOAT.";

}]);

app.controller("CapybaraCtrl", ['$scope', function($scope) {
	$scope.capystuff = "CAPY.";
	$scope.picUrl = "https://media.mnn.com/assets/images/2015/04/big-capybara.jpg";

}]);

app.controller("RaccoonCtrl", ['$scope', function($scope) {
	$scope.racstuff = "RAC.";
	$scope.picUrl = "http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-FwsgxoQn16AoI3zfsw-6pq5KwuvxiGcGpy348nTghBXPQ0k4i/"
}]);

app.controller("AnteaterCtrl", ['$scope', function($scope) {
	$scope.stuff = "ANT.";

}]);