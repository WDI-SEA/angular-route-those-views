var app = angular.module("ElTaquin", ['ui.router', 'ui.bootstrap']);
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: '../home.html',
	})
	.state('menu', {
		url: '/menu',
		templateUrl: '/menu.html'
	})


	$locationProvider.html5Mode(true);

}]);

function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: './img/carimg/logo.jpg'
    },
    {
      image: './img/carimg/mulitas.jpg'
    },
    {
      image: './img/carimg/pinaloka.jpg'
    },
    {
      image: './img/carimg/asadaplate.jpg'
    }
  ];
}
