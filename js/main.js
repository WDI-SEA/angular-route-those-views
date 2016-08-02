var app = angular.module('Portfolio', ['ui.router']);

app.factory('projects', function() {
  return {
    'tmp/1': {img: '200x150',title: 'Project 1'},
    'tmp/2': {img: '200x150',title: 'Project 2'},
    'tmp/3': {img: '200x150',title: 'Project 3'},
    'tmp/4': {img: '200x150',title: 'Project 4'},
    'tmp/5': {img: '200x150',title: 'Project 5'},
    'tmp/6': {img: '200x150',title: 'Project 6'},
    'tmp/7': {img: '200x150',title: 'Project 7'},
    'tmp/8': {img: '200x150',title: 'Project 8'}
  }
})

app.controller('MainCtrl', ['$scope', 'projects', function($scope, projects) {
  $scope.projects = projects;
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
