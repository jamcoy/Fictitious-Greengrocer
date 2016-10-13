angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome to the Fictitious Greengrocer";
        //$('#fictionModal').modal('show');
        // start carousel
        $('#carousel-example-generic').carousel({
            interval: 6000
        });
    })
    .controller('ProduceController', function($scope) {
        // placeholder
    })
    .controller('BoxesController', function($scope) {
        $scope.boxCustomer = {};
        $scope.submitForm = function() {
            if ($scope.fruitboxForm.$valid) {
                $scope.boxCustomer.name = $scope.customer.name;
                $scope.boxCustomer.email = $scope.customer.email;
                $scope.boxCustomer.phone = $scope.customer.phone;
            }
            console.log($scope.boxCustomer.name, $scope.boxCustomer.email, $scope.boxCustomer.phone);
        }
    })
    .controller('NewsController', function($scope) {
        $scope.newsletterUser = {};
        $scope.submitForm = function() {
            if ($scope.newsletterForm.$valid) {
                $scope.newsletterUser.username = $scope.subscriber.name;
                $scope.newsletterUser.email = $scope.subscriber.email;
            }
            console.log($scope.newsletterUser.username, $scope.newsletterUser.email);
        }
    })
    .controller('ContactController', function($scope) {
        // placeholder
    })
;