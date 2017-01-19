angular.module('App')
.controller('HomeController', ['$scope', '$state', function($scope, $state){
  $scope.name = 'Home page';
}])
.controller('AboutController', ['$scope', '$state', function($scope, $state){
  $scope.name = 'About page';
}])
.controller('SponsorsController', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams){
  $scope.name = 'Sponsors page';
  $scope.id = $stateParams.id;
  $scope.sponsors = [
    {
      name: "Apple",
      image: "../img/apple.png",
      about: "Apple is a....",
      donationTier: "Gold"
    },
    {
      name: "Google",
      image: "../img/google.png",
      about: "Google is a....",
      donationTier: "Gold"
    },
    {
      name: "Microsoft",
      image: "../img/microsoft.png",
      about: "Microsoft is a...",
      donationTier: "Silver"
    },
    {
      name: "Uber",
      image: "../img/uber.jpg",
      about: "Uber is a...",
      donationTier: "Silver"
    },
    {
      name: "Airbnb",
      image: "../img/airbnb.png",
      about: "Airbnb is a...",
      donationTier: "Bronze"
    },
    {
      name: "Amazon",
      image: "../img/amazon.png",
      about: "Amazon is a...",
      donationTier: "Gold"
    }
  ];
}]);
