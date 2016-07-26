var app = angular.module('Portfolio', ['ui.router']);

app.controller('MainCtrl', ['$scope', function($scope) {
  // $scope.text = 'main page';
  $scope.projects = {
    '1': 'Project One',
    '2': 'Project Two',
    '3': 'Project Three',
    '4': 'Project Four',
    '5': 'Project Five',
    '6': 'Project Six',
    '7': 'Project Seven',
    '8': 'Project Eight',
    '9': 'Project Nine',
    '10': 'Project Ten'
  }
}])

app.controller('ProjectsCtrl', ['$scope', function($scope) {
  $scope.text = 'projects list page'
}])

app.controller('ContactCtrl', ['$scope', function($scope) {
  $scope.text = 'contact page'
}])

app.controller('AboutCtrl', ['$scope', function($scope) {
  $scope.text = 'about page'
}])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: 'views/projects.html',
      controller: 'ProjectsCtrl'
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
    })


}])
