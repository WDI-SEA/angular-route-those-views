// var app = angular.module('GreysAnatomyApp', ['angular-carousel-3d']);

// function () {
//     angular
//         .module('demo', [
//             'ngSanitize',
//             'angular-carousel-3d'
//         ])
//         .controller('AppController', AppController);

//     AppController.$inject = ['$scope', '$log'];

//     function AppController($scope, $log) {
//         var vm = this;

//         // SLIDES
//         //===================================
//         vm.slides = [
//             {'src': 'img/carimg/alex.gif'},
//             {'src': 'img/carimg/amelia.gif'},
//             {'src': 'img/carimg/bailey.gif'},
//             {'src': 'img/carimg/grey.gif'},
//             {'src': 'img/carimg/callie.gif'}
//         ];

//         vm.options = {
//             sourceProp: 'src',
//             visible: 5,
//             perspective: 35,
//             startSlide: 0,
//             border: 3,
//             dir: 'ltr',
//             width: 360,
//             height: 270,
//             space: 220,
//             autoRotationSpeed: 2500,
//             loop: true
//         };

//         vm.removeSlide = removeSlide;
//         vm.addSlide = addSlide;
//         vm.selectedClick = selectedClick;
//         vm.slideChanged = slideChanged;
//         vm.beforeChange = beforeChange;
//         vm.lastSlide = lastSlide;


//         function lastSlide(index) {
//             $log.log('Last Slide Selected callback triggered. \n == Slide index is: ' + index + ' ==');
//         }

//         function beforeChange(index) {
//             $log.log('Before Slide Change callback triggered. \n == Slide index is: ' + index + ' ==');
//         }

//         function selectedClick(index) {
//             $log.log('Selected Slide Clicked callback triggered. \n == Slide index is: ' + index + ' ==');
//         }

//         function slideChanged(index) {
//             $log.log('Slide Changed callback triggered. \n == Slide index is: ' + index + ' ==');
//         }


//         function addSlide(slide, array) {
//             array.push(slide);
//             vm.slide = {};
//         }

//         function removeSlide(index, array) {
//             array.splice(array.indexOf(array[index]), 1);
//         }
//     }


// };