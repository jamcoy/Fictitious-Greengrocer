angular.module('FGG-App', ['ngRoute', 'RouteControllers']);

angular.module('FGG-App').config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
        .when('/news', {
            templateUrl: 'templates/news.html',
            controller: 'NewsController'
        })
    ;

});