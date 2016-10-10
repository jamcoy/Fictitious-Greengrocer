angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome to the Fictitious Greengrocer";
    })
    .controller('NewsController', function($scope) {

        $scope.newsletterUser = {};

        $scope.submitForm = function() {
            if ($scope.newsletterForm.$valid) {
                $scope.newsletterUser.username = $scope.user.username;
                $scope.newsletterUser.email = $scope.user.email;
            }

            console.log($scope.newsletterUser.username, $scope.newsletterUser.email);
        }
    });
;