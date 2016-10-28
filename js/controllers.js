var app = angular.module('KimsApp');




app.controller("AppCtrl1", ['$scope', function($scope){
$scope.stuff = "testing";
	}]);

app.controller("AppCtrl2", ['$scope', function($scope){
$scope.blah = "testing";

	}]);

app.controller("AppCtrl3", ['$scope', function($scope){

  $scope.parkList = [
    {
    	name:'Kerry Park', 
    	address:'211 W Highland Dr', 
    	description:'Kerry Park is a 1.26 acres park on the south slope of Queen Anne Hill in Seattle, Washington, located at the corner of 2nd Avenue W. and W. Highland Drive.' },
    {
    	name:'Golden Gardens', 
    	address:'8498 Seaview Pl NW', 
    	description:'Golden Gardens Park is a public park in Ballard, a neighborhood in Seattle, Washington. The park includes wetlands, beaches, hiking trails, and picnic and playground areas. The park is bisected by the BNSF Scenic Subdivision railway line.'},
    {
    	name:'Alki Beach Park', 
    	address:'1702 Alki Ave SW', 
    	description:'Alki Beach Park is a 135.9-acre park located in the West Seattle neighborhood of Seattle, Washington that consists of the Elliott Bay beach between Alki Point and Duwamish Head. ' },
    {
    	name:'Gas Works Park', 
    	address:'2101 N Northlake Way',
    	description:'Gas Works Park in Seattle, Washington, is a 19.1-acre public park on the site of the former Seattle Gas Light Company gasification plant, located on the north shore of Lake Union at the south end of the Wallingford neighborhood.'}

  ];




	}]);

app.controller("AppCtrl4", ['$scope', function($scope){

	}]);

app.controller("AppCtrl5", ['$scope', function($scope){

	}]);

