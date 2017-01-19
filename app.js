// setter version
angular.module('App', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider.state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl',
        })
        .state('inspiration', {
          url: '/inspiration',
          templateUrl: 'views/inspiration.html',
          controller: 'InspirationCtrl',
          // })
          // .state('', {
          //   url: '',
          //   templateUrl: '',
          //   controller: '',
          // })
          // .state('', {
          //   url: '',
          //   templateUrl: '',
          //   controller: '',
        });
    }
  ]);
