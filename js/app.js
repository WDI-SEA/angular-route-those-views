var app = angular.module("MuseApp", ["MuseCtrls","ui.router"]);

app.config([
	"$stateProvider",
	"$urlRouterProvider",
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider.state("home", {
			url: "/",
			templateUrl: "views/home.html",
			// controller: "HomeCtrl"

		})
		.state(
			"about",
			{
				url:"/about",
				templateUrl: "views/about.html",
				// controller: "AboutCtrl"
			}
		)
		.state(
			"albums",
			{
				url: "/albums",
				templateUrl: "views/albums.html",
				// controller: "AlbumCtrl"
			}
		);
	}
]);