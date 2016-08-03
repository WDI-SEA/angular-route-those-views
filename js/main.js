var app = angular.module('Portfolio', ['ui.router']);

app.factory('projects', function() {
  return {
    '1': {title: 'Dungeon Explorer',    cover: 'project/cover-dung.png',
          img: ['dungeon1.png','dungeon2.png'],
          desc: 'Lorem Ipsum'},

    '2': {title: 'SquidLink',           cover: 'project/cover-squidl.png',
          img: ['squidlink1.png', 'squidlink2.png', 'squidlink3.png', 'squidlink4.png',],
          desc: 'Lorem Ipsum'},

    '3': {title: 'Game of Life',        cover: 'project/cover-life.png',
          img: ['gol1.png', 'gol2.png'],
          desc: 'Lorem Ipsum'},

    '4': {title: 'Homocides by Police', cover: 'project/cover-cops.png',
          img: ['homocide1.png','homocide2.png'],
          desc: 'Lorem Ipsum'},

    '5': {title: 'Project 5',           cover: 'project/tmp.png',
          img: [''],
          desc: 'Lorem Ipsum'},

    '6': {title: 'Project 6',           cover: 'project/tmp.png',
          img: [''],
          desc: 'Lorem Ipsum'}
  }
})

app.controller('MainCtrl', ['$scope', 'projects', function($scope, projects) {
  $scope.projects = projects;
}])

app.controller('ProjectsCtrl', ['$scope', 'projects', '$stateParams',
  function($scope, projects, $stateParams) {
  $scope.project = projects[$stateParams.id];
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
      url: '/projects/:id',
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
