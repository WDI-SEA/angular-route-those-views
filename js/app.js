var app = angular.module("HippoApp", ["ui.router"]).run(function() {
	console.log("App has loaded!");
});

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
	.state("home", {
		url: "/",
		templateUrl: "views/home.html",
	}).state("types", {
		url: "/types",
		templateUrl: "views/types.html",
	}).state("facts", {
		url: "/facts",
		templateUrl: "views/facts.html",
	})
}]);
