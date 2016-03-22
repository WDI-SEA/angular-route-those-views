angular.module('AdventureTimeApp', ['AdventureTimeCtrls', 'ngRoute'])

.config(
  ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
$routeProvider
.when('/', {
    templateUrl: 'views/home.html'
}) 
.when('/about', {
    templateUrl: 'views/about.html'
})
.when('/characters', {
    templateUrl: 'views/characters.html'
})
.when('/episodes', {
    templateUrl: 'views/episodes.html'
})
.otherwise('views/home.html')

$locationProvider.html5Mode(true);
}]);