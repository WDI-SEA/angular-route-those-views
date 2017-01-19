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
      name: "Amazon",
      image: "../img/amazon.png",
      about: "Amazon.com, often simply Amazon, is an American electronic commerce and cloud computing company, founded on July 5, 1994, by Jeff Bezos and based in Seattle, Washington. It is the largest Internet-based retailer in the world by total sales and market capitalization. Amazon.com started as an online bookstore, later diversifying to sell DVDs, Blu-rays, CDs, video downloads/streaming, MP3 downloads/streaming, audiobook downloads/streaming, software, video games, electronics, apparel, furniture, food, toys, and jewelry. The company also produces consumer electronics—notably, Amazon Kindle e-readers, Fire tablets, and Fire TV—and is the world's largest provider of cloud infrastructure services (IaaS). Amazon also sells certain low-end products like USB cables under its in-house brand AmazonBasics. (wikipedia)",
      donationTier: "Gold",
      website: "www.amazon.com"
    },
    {
      name: "Apple",
      image: "../img/apple.jpg",
      about: "Apple is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services. Its hardware products include the iPhone smartphone, the iPad tablet computer, the Mac personal computer, the iPod portable media player, the Apple Watch smartwatch, and the Apple TV digital media player. Apple's consumer software includes the macOS and iOS operating systems, the iTunes media player, the Safari web browser, and the iLife and iWork creativity and productivity suites. Its online services include the iTunes Store, the iOS App Store and Mac App Store, Apple Music, and iCloud. (wikipedia)",
      donationTier: "Gold",
      website: "www.apple.com"
    },
    {
      name: "Google",
      image: "../img/google.png",
      about: "Google is an American multinational technology company specializing in Internet-related services and products that include online advertising technologies, search, cloud computing, software, and hardware. (wikipedia)",
      donationTier: "Gold",
      website: "www.google.com"
    },
    {
      name: "Microsoft",
      image: "../img/microsoft.png",
      about: "Microsoft Corporation (commonly referred to as Microsoft or MS) is an American multinational technology company headquartered in Redmond, Washington, that develops, manufactures, licenses, supports and sells computer software, consumer electronics and personal computers and services. Its best known software products are the Microsoft Windows line of operating systems, Microsoft Office office suite, and Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface tablet lineup. As of 2011, it was the world's largest software maker by revenue, and one of the world's most valuable companies. (wikipedia)",
      donationTier: "Silver",
      website: "www.microsoft.com"
    },
    {
      name: "Uber",
      image: "../img/uber.png",
      about: "Uber Technologies Inc. is an American worldwide online transportation network company headquartered in San Francisco, California. It develops, markets and operates the Uber app, which allows consumers with smartphones to submit a trip request, which the software program then automatically sends to the Uber driver nearest to the consumer, alerting the driver to the location of the customer. Uber drivers use their own personal cars. As of August 2016, the service was available in over 66 countries and 545 cities worldwide. The Uber app automatically calculates the fare and transfers the payment to the driver. Since Uber's launch, several other companies have replicated its business model, a trend that has come to be referred to as 'Uberification'. (wikipedia)",
      donationTier: "Silver",
      website: "www.uber.com"
    },
    {
      name: "Airbnb",
      image: "../img/airbnb.jpg",
      about: "Airbnb is a peer-to-peer online marketplace and homestay network enabling people to list or rent short-term lodging in residential properties, with the cost of such accommodation set by the property owner. The company receives percentage service fees from both guests and hosts in conjunction with every booking. It has over 2,000,000 listings in 34,000 cities and 191 countries. (wikipedia)",
      donationTier: "Bronze",
      website: "www.airbnb.com"
    },

  ];
}]);
