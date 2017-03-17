var app = angular.module("DrHorribleApp", ["HorribleCtrl", "ui.router"]);

app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home',{
    url: '/',
    templateUrl: "views/home.html",
    controller: 'HorribleCtrl'
  })
  .state('acts',{
    url: "/acts",
    templateUrl: "views/acts.html"
  })
  .state('characters',{
    url: "/characters",
    templateUrl: "views/characters.html"
  })
  .state('badHorse',{
    url: "/badHorse",
    templateUrl: "views/allCharacters/badHorse.html"
  })
  .state('captainHammer',{
    url: "/captainHammer",
    templateUrl: "views/allCharacters/captainHammer.html"
  })
  .state('drHorrible',{
    url: "/drHorrible",
    templateUrl: "/views/allCharacters/drHorrible.html"
  })
  .state("moist",{
    url: "/moist",
    templateUrl: "/views/allCharacters/moist.html"
  })
  .state("penny",{
    url: "/penny",
    templateUrl: "/views/allCharacters/penny.html"
  })
  .state("singAlong",{
    url: "/singAlong",
    templateUrl: "/views/singAlong.html",
    controller: "HorribleCtrl"
  })

}]);
