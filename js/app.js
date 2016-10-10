angular.module('FGG-App', ['ngRoute', 'RouteControllers', 'FGG-Directive']);

angular.module('FGG-App').config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '../templates/home.html',
            controller: 'HomeController'
        })
        .when('/produce', {
            templateUrl: '../templates/produce.html',
            controller: 'ProduceController'
        })
        .when('/boxes', {
            templateUrl: '../templates/boxes.html',
            controller: 'BoxesController'
        })
        .when('/news', {
            templateUrl: '../templates/news.html',
            controller: 'NewsController'
        })
        .when('/contact', {
            templateUrl: '../templates/contact.html',
            controller: 'ContactController'
        })
    ;

});