var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('dance', {
      url: '/dance',
      templateUrl: 'views/dance.html',
      controller: 'DanceCtrl'
    })
    .state('dance.story', {
      url: '/story',
      templateUrl: 'views/dance/story.html',
      controller: 'DanceCtrl'
    })
    .state('dance.performance', {
      url: '/performance',
      templateUrl: 'views/dance/performance.html',
      controller: 'DanceCtrl'
    })
    .state('dance.videos', {
      url: '/videos',
      templateUrl: 'views/dance/videos.html',
      controller: 'DanceCtrl'
    })
    .state('dance.choreography', {
      url: '/choreography',
      templateUrl: 'views/dance/choreography.html',
      controller: 'DanceCtrl'
    })
    .state('dance.teaching', {
      url: '/teaching',
      templateUrl: 'views/dance/teaching.html',
      controller: 'DanceCtrl'
    })
    .state('design', {
      url: '/design',
      templateUrl: 'views/design.html',
      controller: 'DesignCtrl'
    })
    .state('design.story', {
      url: '/story',
      templateUrl: '/views/design/story.html',
      controller: 'DesignCtrl'
    })
    .state('design.interiorarchitecture', {
      url: '/interiorarchitecture',
      templateUrl: '/views/design/interiorarchitecture.html',
      controller: 'DesignCtrl'
    })
    .state('design.industrialdesign', {
      url: '/industrialdesign',
      templateUrl: 'views/design/industrialdesign.html',
      controller: 'DesignCtrl'
    })
    .state('webdevelopment', {
      url: '/webdevelopment',
      templateUrl: 'views/webdevelopment.html',
      controller: 'WebDevelopmentCtrl'
    })
    .state('webdevelopment.story', {
      url: '/story',
      templateUrl: 'views/webdevelopment/story.html',
      controller: 'WebDevelopmentCtrl'
    })
    .state('webdevelopment.portfolio', {
      url: '/portfolio',
      templateUrl: 'views/webdevelopment/portfolio.html',
      controller: 'WebDevelopmentCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    });

}]);
