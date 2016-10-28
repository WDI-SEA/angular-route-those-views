var app = angular.module("HipHopApp");
app.controller("RootsCtrl", ["$scope", function($scope) {

	$scope.expand = function(desc) {
    desc.isExpanded = true;
  }

	$scope.collapse = function(desc) {
    desc.isExpanded = false;
  }
	
}]);

// app.controller("RootsCtrl", ["$scope", function($scope) {

// 	$scope.expand = function(desc) {
//     desc.isExpanded = true;
//   }

// 	$scope.collapse = function(desc) {
//     desc.isExpanded = false;
//   }
	
// }]);

// app.controller("RootsCtrl", ["$scope", function($scope) {

// 	$scope.expand = function(desc) {
//     desc.isExpanded = true;
//   }

// 	$scope.collapse = function(desc) {
//     desc.isExpanded = false;
//   }
	
// }]);