var app = angular.module("MarylandBasketball", ["Controllers", "ui.router"]);

app.config([
  "$stateProvider",
  "$urlRouterProvider",
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    //define routes
    $stateProvider.state(
      "players",
      {
        url: "/players",
        templateUrl: "views/players.html",
        controller: "PlayersCtrl"
      }
    )
    .state(
      "showPlayer",
      {
        url: "/players/:id",
        templateUrl: "views/playerShow.html"
      }
    );
  }
]);
