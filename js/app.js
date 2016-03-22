angular.module("BruceSpringsteenApp", ["BossControlls", "ui.router"])

.config([
	"$stateProvider",
	"$urlRouterProvider",
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");

		$stateProvider
		.state(
			"about",
			{
				url:"/about",
				templateUrl: "views/about.html"
			}
		)
		.state(
			"facts",
			{
				url:"/facts",
				templateUrl: "views/facts.html",
				controller: "FactsController"
			}
		)
		.state(
			"videos",
			{
				url:"/videos",
				templateUrl: "views/videos.html"
			}
		);
	}
]);