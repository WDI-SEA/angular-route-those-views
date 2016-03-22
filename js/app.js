angular.module("DragQueenApp", ["DragQueenCtrls", "ui.router"]) //first param is name, array is like "requirements like in express."

.config([
  "$stateProvider",
  "$urlRouterProvider", //these two things are just apart of angular, built in, we will learn more
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/"); //this line is like built in err catching. will send any other attempts to home page
    $stateProvider
      .state("home", { //these state lines are setting up routes
        url:"/", //the actual url
        templateUrl: "views/home.html" //where the html file is for what's seen on page
      }) //of there was a controller it would go here. 
      .state(
        "about",
        {
          url: "/about",
          templateUrl: "views/about.html"
        })
      .state(
        "queens",
        {
          url:"/queens",
          templateUrl: "views/queens.html"
        })
  }
]);
