angular.module("PortfolioApp", ["ui.bootstrap","ui.router"])

.config([
	"$stateProvider",
	"$urlRouterProvider",
	function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/");
		//Define Routes
		$stateProvider
			.state("Portfolio", {
				url:"/",
				templateUrl:"/views/Portfolio.html"
			})
			.state("About",{
				url:"/about",
				templateUrl:"/views/About.html"
			})
			.state("Contact",{
				url:"/contact",
				templateUrl:"/views/Contact.html"
			})
			.state("Projects",{
				url:"/projects",
				templateUrl:"/views/Projects.html"
			})
	}
])