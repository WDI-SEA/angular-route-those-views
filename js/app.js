var app = angular.module("MarylandBasketball", ["Controllers", "ui.router"]);

app.config([
  "$stateProvider",
  "$urlRouterProvider",
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    //define routes
    $stateProvider.state(
      "index",
      {
        url: "/",
        templateUrl: "views/index.html"
      }
    )
    .state(
      "players",
      {
        url: "/players",
        templateUrl: "views/players.html"
      }
    )
    .state(
      "showPlayer",
      {
        url: "/players/:id",
        templateUrl: "views/playerShow.html",
        controller: "PlayersShowCtrl"
      }
    );
  }
]);
