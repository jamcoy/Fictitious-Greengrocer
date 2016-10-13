angular.module('FGG-Directive',[])
    .directive('navbar', function() {
        return {
            restrict: 'E', // E -> element (or A -> attribute)
            templateUrl: 'templates/directives/navbar.html'
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
            templateUrl: 'templates/directives/fruitboxForm.html'
        };
    })
    .directive('footerBar', function() {
        return {
            restrict: 'E', // E -> element (or A -> attribute)
            templateUrl: 'templates/directives/footerBar.html'
        };
    })
    .directive('produce', function() {
        return {
            restrict: 'E', // E -> element (or A -> attribute)
            templateUrl: 'templates/directives/produce.html'
        };
    })
    .directive('noFunction', function() {
        return {
            restrict: 'E', // E -> element (or A -> attribute)
            templateUrl: 'templates/directives/noFunction.html',
            controller: 'NoFunctionModalController'
        };
    })
    .directive('contactForm', function() {
        return {
            restrict: 'E', // E -> element (or A -> attribute)
            templateUrl: 'templates/directives/contactForm.html',
            controller: 'ContactController'
        };
    })
;