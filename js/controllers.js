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
  $scope.gparkList = [
    {
    	name:'Solstice Park', 
    	address:'West Seattle:  7400 Fauntleroy Way S.W.', 
    	description:'7.17-acre city park known for stones marking the equinox & solstice, plus tennis courts & trails.'},
    {
    	name:'Bhy Kracke Park', 
    	address:'Queen Anne:  Bigelow Ave. N. and Comstock Pl.', 
    	description: 'Sloping residential-area green space offering scenic views from the top, with a playground below.' },
    {
    	name:'Jack Block Park', 
    	address:'West Seattle:  2130 Harbor Ave. S.W.', 
    	description:'Jack Block Park is a 15-acre (6.1 ha) park in the West Seattle neighborhood of Seattle, Washington, USA.[1] Situated on the northwest corner of the Port of Seattles Terminal 5, the park offers public beach access, a childrens play area, and a 45-foot (14 m) observation tower.' },
    {
    	name:'Kobe Terrace', 
    	address:'Downtown:  221 6th Ave. S.',
    	description:'Kobe Terrace is a 1-acre public park in the International District neighborhood of Seattle, Washington. It incorporates the Danny Woo International District Community Garden.'},
    {
    	name:'Harborview Park', 
    	address:'Central Seattle:  779 Alder St.',
    	description:''},
    {
    	name:'Thomas C. Wales Park', 
    	address:'Queen Anne:  2401 6th Ave. N.',
    	description:'Seattle Parks and Recreation worked with the Office of Arts and Cultural Affairs to select an artist to collaborate with the landscape architects in designing a site that can be used for recreation and open space as well as to promote the value of arts and culture. The property was used as a gravel pit and for material storage prior to being developed into a neighborhood park.'},
    {
    	name:'Rainbow Point', 
    	address:'North Seattle:  N.E. 75th St. and Banner Way N.E.',
    	description:'What a beautiful view! Enjoy a panorama of downtown and the Olympics, while also resting upon benches or meandering along the simple pathway. This park is lighted, and features trees and shrubs, along with plant beds and small lawns.'}
  ];
	}]);

app.controller("AppCtrl5", ['$scope', function($scope){

	}]);

