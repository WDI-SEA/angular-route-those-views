var app = angular.module("PortfolioApp", ["ui.bootstrap", "ui.router"]);

app.config([
    "$stateProvider", "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/");

        $stateProvider
        .state(
            "Home",
            {
                url: "/",
                templateUrl: "views/home.html"
                //controller: "HomeCtrl"
            }
        )
        .state(
            "Resume",
            {
                url: "/resume",
                templateUrl: "views/resume.html"
                //controller: "ResumeCtrl"
            }
        )
        .state(
            "Project",
            {
                url: "/projects/:id",
                templateUrl: "views/projects.html"
                //controller: "ProjectsCtrl"
            }
        );
    }
]);