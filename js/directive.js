angular.module('FGG-Directive',[])
    .directive('navbar', function() {
        return {
            restrict: 'E', // E -> element (or A -> attribute)
            templateUrl: 'templates/directives/navbar.html'
        };
    })
;