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
;