var ryanSite = angular.module('ryanSite', ['ui.router','infinite-scroll']);

ryanSite.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl'
  })
  .state('portfolio', {
    url: '/portfolio',
    templateUrl: 'views/portfolio.html',
    controller: 'PortfolioCtrl'
  })
  .state('resume', {
    url: '/resume',
    templateUrl: 'views/resume.html',
    controller: 'ResumeCtrl'
  })
  .state('experience', {
    url: '/experience',
    templateUrl: 'views/experience.html',
    controller: 'ExperienceCtrl'
  })
  .state('skills', {
    url: '/skills',
    templateUrl: 'views/skills.html',
    controller: 'SkillsCtrl'
  });
}]);
