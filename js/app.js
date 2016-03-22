angular.module("WavvesApp", ["WavvesCtrls", "ui.router"])

.config([
  "$stateProvider",
  "$urlRouterProvider",
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    
    //define routes here

    $stateProvider.state("wavves", 
      {
        url: "/",
        templateUrl: "views/main.html"
      })
      .state("about",
        {
          url: "/about",
          templateUrl: "views/about.html"
        })
      .state("discography",
        {
          url:"/discography",
          templateUrl: "views/discography.html"
        })
    }
  ]);