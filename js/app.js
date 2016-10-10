angular.module('FGG-App', ['ngRoute', 'RouteControllers', 'FGG-Directive']);

angular.module('FGG-App').config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '../templates/home.html',
            controller: 'HomeController'
        })
        .when('/news', {
            templateUrl: '../templates/news.html',
            controller: 'NewsController'
        })
        .when('/boxes', {
            templateUrl: '../templates/boxes.html',
            controller: 'BoxesController'
        })
    ;

});