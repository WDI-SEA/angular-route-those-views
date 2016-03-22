angular.module('PortfolioApp', ['ui.router'])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    //define routes
    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'views/main.html'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html'
    })

    .state('projects', {
      url: '/projects',
      templateUrl: 'views/projects.html'
    })
  }
])