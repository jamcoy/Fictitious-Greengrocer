angular.module('FGG-Directive',[])
    .directive('navbar', function() {
        return {
            restrict: 'E', // E -> element (or A -> attribute)
            templateUrl: 'templates/directives/navbar.html',
            controller: 'NavbarController'
        };
    })
    .directive('newsletterForm', function() {
        return {
            restrict: 'E', // E -> element (or A -> attribute)
            templateUrl: 'templates/directives/newsletterForm.html'
        };
    })
    .directive('fruitboxForm', function() {
        return {
            restrict: 'E', // E -> element (or A -> attribute)
            templateUrl: 'templates/directives/fruitboxForm.html',
            controller: 'BoxesController'
        };
    })
    .directive('footerBar', function() {
        return {
            restrict: 'E', // E -> element (or A -> attribute)
            templateUrl: 'templates/directives/footerBar.html'
        };
    })
    .directive('contactForm', function() {
        return {
            restrict: 'E', // E -> element (or A -> attribute)
            templateUrl: 'templates/directives/contactForm.html',
            controller: 'ContactController'
        };
    })
    .directive('productModal', function() {
        return {
            restrict: 'E', // E -> element (or A -> attribute)
            templateUrl: 'templates/directives/productModal.html',
            controller: 'ProduceController'
        };
    })
;